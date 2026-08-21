---
title: 외부 액세스 (CLI 및 AI 클라이언트)
sidebar_label: 외부 액세스
---

**외부 액세스**를 사용하면 로컬 명령줄 프로그램과 [MCP](https://modelcontextprotocol.io/) 지원 AI
클라이언트가 [sctl](https://github.com/scriptscat/sctl)을 통해 ScriptCat의 스크립트를 관리할 수 있습니다.

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve`는 명시적으로 시작해야 하는 별도의 로컬 데몬입니다. `sctl mcp`와 요청 명령은 데몬을
자동으로 시작하지 않습니다. 소스 공개 또는 쓰기 허용 여부는 항상 ScriptCat의 정책과 브라우저 확인 UI가
결정하며, 외부 프로그램이 자신의 요청을 승인할 수 없습니다.

:::warning 리스너는 기본적으로 로컬입니다
sctl은 기본적으로 `127.0.0.1`에서 수신 대기합니다. `--listen-address`가 명시적으로 전달된 경우에만 다른
인터페이스에서 수신 대기합니다. `ws://`는 비즈니스 트래픽을 암호화하지 않으며 원격 클라이언트 간 격리도
없으므로 기본이 아닌 주소는 신뢰할 수 있는 네트워크에서만 사용하세요. 확장 프로그램과 데몬은 여전히
일회성 페어링 코드를 통해 장기 키를 설정하고 이후 연결에서 상호 인증을 사용합니다.
:::

## 1. sctl 설치

최신 릴리스를 한 줄 명령으로 설치 — macOS 및 Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

또는 Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

설치 프로그램은 플랫폼에 맞는 하이픈 이름의 `sctl-<version>-<os>-<arch>.<ext>` 릴리스 아카이브를
다운로드하고, 동일 릴리스의 `checksums.txt`에 대해 sha256을 검증한 다음 `sctl`을 `~/.local/bin`
(macOS/Linux) 또는 `%LOCALAPPDATA%\sctl\bin`(Windows)에 설치합니다. `SCTL_VERSION`은 특정 버전을 고정하고,
`SCTL_INSTALL_DIR`은 설치 디렉터리를 재정의합니다. 설치 디렉터리가 `PATH`에 없으면 설치 프로그램이
플랫폼에 맞는 정확한 `PATH` 힌트를 출력합니다 — 셸 프로필이나 사용자 PATH를 절대 편집하지 않습니다.

sctl은 단일 실행 파일입니다. [GitHub Releases](https://github.com/scriptscat/sctl/releases)에 플랫폼용
게시된 아카이브가 있으면 다운로드하여 압축을 풀고 `sctl`(Windows에서는 `sctl.exe`)을 `PATH`에 넣을 수도
있습니다.

```bash
sctl version
```

일반 소스 빌드는 주입된 버전, 커밋 및 빌드 시간 메타데이터가 있는 릴리스 빌드와 구분하기 위해
`0.0.0-dev`를 보고합니다. 이는 ScriptCat에 연결하는 것을 방해하지 않습니다. 릴리스가 없으면 기여자는
[sctl 저장소](https://github.com/scriptscat/sctl)에서 빌드할 수 있습니다.

## 2. 데몬 시작 및 등록

등록은 일회성 단계입니다. 이후 CLI와 모든 MCP 클라이언트는 신뢰할 수 있는 확장 프로그램-데몬 채널을
공유하며, 별도로 페어링하지 않습니다.

### 2.1 데이터 디렉터리 선택

데몬, CLI 및 MCP 프로세스는 동일한 데이터 디렉터리를 사용해야 합니다. 이 디렉터리는 장기 페어링 키,
로컬 제어 토큰 및 로그를 저장합니다. 현재 사용자에게 개인적인 절대 경로를 선택하세요:

```text
/absolute/path/to/sctl-data
```

모든 sctl 프로세스에 동일한 환경 변수를 설정하세요:

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

명시적인 `--data-dir`는 환경 변수보다 우선합니다.

`--data-dir`와 `SCTL_DATA_DIR`가 모두 설정되지 않으면 sctl은 플랫폼의 기본 사용자별 애플리케이션 데이터
디렉터리를 사용합니다. 데이터 디렉터리를 저장소나 공유 동기화 폴더에 두지 말고 `pairing.key` 또는
`control.token`을 AI 모델에 절대 제공하지 마세요.

### 2.2 데몬 시작

터미널에서 다음을 실행하고 프로세스를 유지하세요:

```bash
sctl serve
```

기본 주소는 `ws://127.0.0.1:8643`입니다. 데몬은 `connect`, `status`, 다른 CLI 명령 또는 `sctl mcp`에 의해
자동 시작되지 않습니다. 지속적인 사용을 위해 운영 체제의 사용자 서비스 관리자로 위 명령을 실행하세요.

모든 네트워크 인터페이스에서 명시적으로 수신 대기하려면 다음을 실행하세요:

```bash
sctl --listen-address 0.0.0.0:8643 serve
```

데몬 호스트에서 동일한 `--listen-address`를 `connect`, `status`, 다른 CLI 명령 및 `sctl mcp`에 전달하세요.
ScriptCat의 **sctl 주소** 설정에 확장 프로그램이 실제로 연결할 수 있는 주소(예: `ws://192.168.1.10:8643`)를
입력하세요. `0.0.0.0`을 입력하지 마세요.

### 2.3 ScriptCat에서 활성화 및 페어링

1. ScriptCat에서 **설정 → 도구 → 외부 액세스**를 열고 스위치를 켭니다.
2. **sctl 주소**가 데몬과 일치하는지 확인합니다. 일반적으로 기본 `ws://127.0.0.1:8643`을 유지하세요.
3. `sctl serve`를 실행 상태로 두고 다른 터미널에서 다음을 실행합니다:

   ```bash
   sctl connect
   ```

4. "sctl 등록" 대화 상자에 8자리 터미널 코드를 입력합니다.
5. 연결을 확인합니다:

   ```bash
   sctl status
   ```

상태는 연결된 확장 프로그램을 보고하고 데몬 버전을 표시해야 합니다.

:::warning 페어링 코드는 터미널 전용입니다
코드는 `A1B2-C3D4`처럼 보이며 2분 후 만료되고 한 번만 사용할 수 있습니다. WebSocket을 통해 확장 프로그램에
전송되지 않습니다. AI 채팅, 이슈, 로그 또는 MCP 구성에 절대 붙여넣지 마세요. 만료되면 `connect`를 다시
실행하세요.
:::

## 3. 권한 및 확인 {#permissions}

| 기능 | 기본 동작 |
|---|---|
| 스크립트 나열 및 메타데이터 읽기 | 직접 반환 |
| 스크립트 소스 읽기 또는 검색 | **소스 읽기** 정책 따름 |
| 스크립트 설치, 편집, 활성화, 비활성화 또는 삭제 | **쓰기** 정책 따름 |

두 정책 모두 "승인 필요"(기본값)와 "직접 허용"을 제공합니다.

"승인 필요"를 사용하면 요청이 브라우저 확인 페이지를 엽니다. 거부, 일회 허용 또는 "이 세션 동안 허용"을
선택할 수 있습니다. 세션 허용은 스크립트와 작업 종류별로 키가 지정되며, 브라우저가 다시 시작되거나 확장
프로그램이 다시 로드되거나 외부 액세스가 중지되면 지워집니다. 요청은 결정 없이 5분 후 만료됩니다.
요청자의 연결 끊김 또는 `Ctrl-C`도 요청을 무효화합니다.

"직접 허용"은 해당 작업 종류에 대한 확인 페이지를 건너뜁니다. 소스에는 API 키, 쿠키 및 기타 비밀 정보가
포함될 수 있고 쓰기는 스크립트를 직접 변경할 수 있으므로, 그 위험을 수용할 때만 활성화하세요.

## 4. 명령줄 사용

```bash
sctl get                         # 스크립트 나열
sctl get <uuid>                  # 메타데이터 읽기
sctl get <uuid> -o source        # 전체 소스 출력
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # 리터럴 소스 검색
sctl grep <uuid> "pattern" -E    # 정규 표현식
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

`grep`은 기본적으로 리터럴입니다. `-E`는 정규 표현식을 활성화하고, `-i`는 대소문자를 무시하며, `-C N`은
컨텍스트를 추가하고, `-m N`은 일치 항목을 제한합니다. 일치하지 않아도 성공으로 간주되며 코드 0으로
종료됩니다.

`edit`는 콘텐츠 기준이며 줄 번호 기준이 아닙니다. 각 `oldText`는 기본적으로 정확히 한 번만 발생해야
합니다. `--replace-all`은 모든 일치 항목을 대체합니다. `-f <file>`로 `{oldText,newText,replaceAll?}` 배열을
전달할 수도 있습니다. 편집 내용만 확장 프로그램에 전송됩니다. 전체 소스를 먼저 읽거나 업로드할 필요가
없습니다.

쓰기 및 소스 공개는 브라우저 결정을 위해 차단됩니다. CLI 종료 코드:

| 종료 코드 | 의미 |
|---|---|
| `0` | 승인되고 성공, 또는 읽기 명령이 정상적으로 완료됨 |
| `1` | 사용자가 요청을 거부함 |
| `2` | 요청 만료, `Ctrl-C`로 취소 또는 확장 프로그램 연결 끊김 |
| `3` | 인수, 연결 또는 스크립트 누락과 같은 기타 오류 |

모든 옵션에 대해 `sctl <command> --help`를 실행하세요.

## 5. AI 클라이언트 연결 (MCP)

먼저 `sctl serve`가 실행 중이고 `status`가 연결된 확장 프로그램을 보고하는지 확인하세요. 그런 다음 MCP
클라이언트가 별도의 `sctl mcp` 프로세스를 시작하도록 구성하세요. GUI 클라이언트에서는 절대 바이너리 및
데이터 경로를 사용하세요:

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "env": {
        "SCTL_DATA_DIR": "/absolute/path/to/sctl-data"
      },
      "args": [
        "mcp",
        "--name",
        "my-ai-client"
      ]
    }
  }
}
```

많은 GUI 애플리케이션은 `~`, `$HOME` 또는 셸 표현식을 확장하지 않습니다. `--name`은 감사 라벨이며 인증된
신원이나 권한 부여 경계가 아닙니다. MCP stdout은 프로토콜 프레임용으로 예약되어 있습니다. stdout에 배너를
출력하는 스크립트로 sctl을 감싸지 마세요.

현재 도구:

| 도구 | 용도 | 확인 정책 |
|---|---|---|
| `scripts_list` | 스크립트 요약 나열 | 없음 |
| `scripts_metadata_get` | 한 스크립트의 메타데이터 읽기 | 없음 |
| `scripts_source_get` | uuid 및 선택적 줄 창으로 소스 읽기 | 소스 읽기 정책 |
| `scripts_source_grep` | 소스 검색 및 일치 줄 반환 | 소스 읽기 정책 |
| `scripts_install_request` | 스크립트 설치 요청 | 쓰기 정책 |
| `scripts_edit_request` | 콘텐츠 기준 편집 요청 | 쓰기 정책 |
| `scripts_toggle_request` | 활성화 또는 비활성화 요청 | 쓰기 정책 |
| `scripts_delete_request` | 삭제 요청 | 쓰기 정책 |

## 6. 감사 및 해지

- 외부 액세스 카드의 "감사 로그 보기"는 이 소스로 필터링된 로그 페이지를 엽니다.
- `sctl status`는 데몬 버전, 확장 프로그램 연결 상태 및 최근 보안 이벤트를 표시합니다.
  `-o json`은 전체 이벤트를 반환합니다.
- "외부 액세스 중지"는 연결을 끊고 확장 프로그램 측 페어링 상태를 삭제하며 세션 허용을 지웁니다.
  이후 재등록이 필요합니다.
- 하나의 AI 클라이언트만 비활성화하려면 해당 클라이언트의 MCP 구성에서 sctl을 제거하세요. 다른 CLI 또는
  클라이언트 액세스는 해지되지 않습니다.

## 7. 문제 해결 {#troubleshooting}

**데몬에 연결할 수 없음**

먼저 `sctl serve`를 실행하세요. 요청 명령은 데몬을 자동 시작하지 않습니다.

**제어 채널 인증 실패**

`serve`, CLI 명령 및 MCP 프로세스가 동일한 절대 데이터 디렉터리로 확인되는지 확인하세요. `SCTL_DATA_DIR`과
명시적 `--data-dir`를 모두 확인한 다음 MCP 클라이언트를 다시 시작하세요.

**상태가 "연결 실패"를 표시함**

데몬이 실행 중인지, 확장 프로그램 주소가 일치하는지, 로컬 보안 소프트웨어가 `127.0.0.1:8643`을 차단하지
않는지 확인하세요.

**명령이 반환되지 않음**

소스 공개 또는 쓰기 확인 페이지가 있는지 브라우저를 확인하세요. 요청을 무효화하려면 `Ctrl-C`를 누르세요.

**로그 찾기**

로그는 `<data-dir>/logs/` 아래에 있습니다. `--data-dir`도 `SCTL_DATA_DIR`도 설정되지 않으면 기본값은
다음과 같습니다:

| 플랫폼 | 로그 디렉터리 |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
