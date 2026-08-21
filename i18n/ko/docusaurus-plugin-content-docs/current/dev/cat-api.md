---
title: CatApi 문서
---

## 개요

이 확장 프로그램에 특화된 API는 모두 `CAT_`로 시작하도록 정의됩니다.

[예제 디렉터리](https://github.com/scriptscat/scriptcat/tree/main/example)에서 관련 예제도 찾을 수 있습니다.

## 정의

### CAT_setProxy

> 0.9.1 안정 릴리스부터 사용 중단됨, 향후 베타 버전에서 다시 나타날 수 있습니다.

프록시를 설정합니다. 이 기능은 Proxy SwitchyOmega와 같은 확장 프로그램과 충돌할 수 있습니다. 여러 스크립트가 충돌 없이 프록시를 사용할 수 있습니다(예: 한 스크립트는 Google 액세스를 제공하고 다른 스크립트는 Twitter 액세스를 제공).

먼저 [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) 및 [Chromium의 PAC 전체 URL 제한](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction)에 대해 읽어보세요.

```typescript
declare function CAT_setProxy(rule: CATType.ProxyRule[] | string): void;

declare namespace CATType {
  interface ProxyRule {
    proxyServer: ProxyServer;
    matchUrl: string[];
  }
  type ProxyScheme = "http" | "https" | "quic" | "socks4" | "socks5";
  interface ProxyServer {
    scheme?: ProxyScheme;
    host: string;
    port?: number;
  }
}
```

### CAT_clearProxy

> 0.9.1 안정 릴리스부터 사용 중단됨, 향후 베타 버전에서 다시 나타날 수 있습니다.

프록시를 지웁니다.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> 0.9.1 안정 릴리스부터 사용 중단됨, 향후 베타 버전에서 다시 나타날 수 있습니다.

실제 클릭. 이 API는 실험적이며 변경되거나 제거될 수 있습니다.

[Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent)로 구현됩니다. 요소가 표시 영역 내에 있고 좌표가 창 위치를 기준으로 하는지 확인하세요.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

이 API를 호출하여 스크립트의 [UserConfig](./config.md) 페이지를 열 수 있습니다.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

관리자가 구성한 저장 시스템을 제어합니다. 이 API가 사용할 `app/uuid` 디렉터리가 생성됩니다. `baseDir` 매개변수가 지정되면 대신 기본 디렉터리로 사용됩니다.

```ts
/**
 * 관리자가 구성한 저장 시스템을 제어합니다. 이 API가 사용할 app/uuid 디렉터리가 생성됩니다. baseDir 매개변수가 지정되면 대신 기본 디렉터리로 사용됩니다.
 * 업로드는 기본적으로 같은 이름의 파일을 덮어씁니다.
 * @param action 작업 유형: list는 지정된 디렉터리의 모든 파일을 나열하고, upload는 파일을 업로드하고, download는 파일을 다운로드하고, delete는 파일을 삭제하고, config는 구성 페이지를 엽니다. move/mkdir 및 유사한 작업은 아직 제공되지 않습니다.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // 파일 경로
    path?: string;
    // 기본 디렉터리, 설정하지 않으면 스크립트의 uuid가 디렉터리로 사용됨
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // 일부 플랫폼은 파일의 해시를 요구하므로 파일 정보를 전달해야 함
    onload: (data: Blob) => void;
    // onprogress?: (progress: number) => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(
  action: "delete",
  details: {
    path: string;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(
  action: "upload",
  details: {
    path: string;
    // 기본 디렉터리, 설정하지 않으면 스크립트의 uuid가 디렉터리로 사용됨
    baseDir?: string;
    data: Blob;
    onload?: () => void;
    // onprogress?: (progress: number) => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(action: "config"): void;
```

### CAT_scriptLoaded

`early-start`를 사용할 때 이 함수로 스크립트가 완전히 로드되었는지 확인할 수 있습니다.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

Blob 객체에서 blob URL을 만듭니다. ScriptCat이 URL 수명 주기를 관리합니다.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

blob URL을 가져와 Blob 데이터를 반환합니다. `GM_xmlhttpRequest` 스트림 응답용 헬퍼.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

URL을 가져와 Document로 구문 분석합니다(가능한 경우 콘텐츠 페이지 컨텍스트에서).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

입력 필드가 있는 메뉴 항목을 등록하여 사용자가 값을 입력할 수 있게 합니다. 콜백은 사용자의 입력을 받습니다.

```typescript
declare function CAT_registerMenuInput(
  name: string,
  listener?: (inputValue?: any) => void,
  options_or_accessKey?:
    | {
        id?: number | string;
        accessKey?: string;
        autoClose?: boolean;
        nested?: boolean;
        individual?: boolean;
        /** 입력 위젯 유형. */
        inputType?: "text" | "number" | "boolean";
        /** 대화 상자 제목 (입력 팝업용). */
        title?: string;
        /** 입력 옆에 표시되는 라벨. */
        inputLabel?: string;
        /** 입력의 기본값. */
        inputDefaultValue?: string | number | boolean;
        /** 자리 표시자 텍스트. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** 메뉴 입력 등록 해제 (`GM_unregisterMenuCommand`의 별칭). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
