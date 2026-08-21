#!/usr/bin/env node
/**
 * Batch paragraph-level translator for dev docs.
 * Reads EN source, translates prose paragraphs per locale, writes output.
 * Code blocks, frontmatter titles, and markdown structure preserved.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';

const BASE = join(import.meta.dirname, '..');
const EN_DIR = join(BASE, 'i18n/en/docusaurus-plugin-content-docs/current');
const LOCALES = ['ja', 'vi', 'zh-Hant', 'es', 'it', 'pt'];

// ─── Per-locale paragraph dictionaries ──────────────────────────────────────
// Key = exact EN paragraph/sentence, Value = translated version.
// These are the prose paragraphs that appear in the dev docs.

const JA = {
  // --- subscribe.md ---
  'The file must start with `UserSubscribe` instead of `UserScript`. The installation link should use the `user.sub.js` extension, and must be an `https` link.':
    'ファイルは `UserScript` の代わりに `UserSubscribe` で始まる必要があります。インストールリンクは `user.sub.js` 拡張子を使用し、`https` リンクである必要があります。',
  'A subscription script only shows the installation dialog for the user to confirm the subscription at install time; subsequent updates are silent, and the update dialog is only shown again if the `connect` permission changes.':
    'サブスクリプションスクリプトは、インストール時にユーザーにサブスクリプションを確認するためのインストールダイアログのみを表示します。以降の更新はサイレントで行われ、`connect` 権限が変更された場合のみ更新ダイアログが再表示されます。',
  'A single subscription script can describe the installation links for multiple scripts. Scripts installed via subscription mode are installed silently, without a confirmation dialog, and the installed scripts still appear in the script list — but their `connect` permission uses the `connect` declared in the subscription rather than the script\'s own `connect` permission.':
    '単一のサブスクリプションスクリプトは、複数のスクリプトのインストールリンクを記述できます。サブスクリプションモードでインストールされたスクリプトは、確認ダイアログなしでサイレントにインストールされ、インストールされたスクリプトはスクリプトリストに表示されますが、`connect` 権限はスクリプト自体の `connect` 権限ではなく、サブスクリプションで宣言された `connect` を使用します。',
  'According to the user\'s configured `update interval`, ScriptCat periodically checks the subscription link for updates; `version` must be configured for this to take effect.':
    'ユーザーが設定した `更新間隔` に従い、ScriptCatはサブスクリプションリンクを定期的に更新をチェックします。これが機能するには `version` を設定する必要があります。',
  'Each subscription update or change compares the script links against the currently installed scripts: scripts no longer in the new subscription are removed, and newly added scripts are installed silently. Script updates follow the script\'s own `version`, using the same update logic as a normally installed script.':
    '各サブスクリプション更新または変更では、スクリプトリンクを現在インストールされているスクリプトと比較します。新しいサブスクリプションに含まれなくなったスクリプトは削除され、新しく追加されたスクリプトはサイレントにインストールされます。スクリプトの更新はスクリプト自体の `version` に従い、通常インストールされたスクリプトと同じ更新ロジックを使用します。',
  'Subscribed scripts are installed and updated silently — adding, removing, or updating a script from a subscription only shows a notification, without requiring user confirmation again. Because of this silent-update mechanism, please only subscribe to sources you trust.':
    'サブスクリプションされたスクリプトはサイレントにインストールおよび更新されます。サブスクリプションからスクリプトを追加、削除、または更新すると、通知のみが表示され、ユーザーの確認は必要ありません。このサイレント更新メカニズムのため、信頼できるソースのみサブスクリプションしてください。',
  'The meaning of certain metadata fields changes within a subscription script.':
    'サブスクリプションスクリプト内では、特定のメタデータフィールドの意味が変更されます。',
  'The subscription name (can also be edited directly in the subscription list)':
    'サブスクリプション名（サブスクリプションリストで直接編集することも可能）',
  'The subscription description, describing what the subscription is for':
    'サブスクリプションの説明、サブスクリプションの目的を記述',
  'The subscription version. If omitted, updates are instead triggered by whether the subscription script\'s content has changed.':
    'サブスクリプションバージョン。省略した場合、サブスクリプションスクリプトの内容が変更されたかどうかに基づいて更新がトリガーされます。',
  'Requests access permission for a site; see `GM_cookie` and `GM_xmlhttpRequest`. For scripts installed via subscription mode, `connect` is overridden by the subscription\'s `connect`.':
    'サイトへのアクセス権限をリクエストします。`GM_cookie` と `GM_xmlhttpRequest` を参照してください。サブスクリプションモードでインストールされたスクリプトでは、`connect` はサブスクリプションの `connect` で上書きされます。',
  'The script installation links required by the subscription':
    'サブスクリプションが必要とするスクリプトインストールリンク',

  // --- cloudcat.md ---
  'Several ways to run in the cloud are provided; see [Running Environments](#running-environments) for details. In addition, [CloudCat](https://github.com/scriptscat/cloudcat) is a service for running background scripts in the cloud — a FAAS platform that is still under development.':
    'クラウドで実行するいくつかの方法が提供されています。詳細は [実行環境](#running-environments) を参照してください。また、[CloudCat](https://github.com/scriptscat/cloudcat) はクラウドでバックグラウンドスクリプトを実行するためのサービス — まだ開発中のFAASプラットフォームです。',
  'The default cloudCat server address':
    'デフォルトのcloudCatサーバーアドレス',
  'Describes the Values to export to the cloud; multiple declarations are allowed.':
    'クラウドにエクスポートするValuesを記述します。複数の宣言が許可されています。',
  'Describes the cookies to export to the cloud; multiple declarations are allowed. Parameters are described using `GM_cookie`\'s `CookieDetails`, for example:':
    'クラウドにエクスポートするクッキーを記述します。複数の宣言が許可されています。パラメータは `GM_cookie` の `CookieDetails` を使用して記述します。例：',
  'Currently only the following APIs are supported; unless otherwise noted, they behave the same as the original API.':
    '現在サポートされているのは以下のAPIのみです。特に記載がない限り、元のAPIと同じように動作します。',
  'Currently only supports getting Values exported via `@exportValue`; set/delete/list and other methods are not supported.':
    '`@exportValue` を介してエクスポートされたValuesの取得のみサポートしています。set/delete/listなどの方法はサポートされていません。',
  'Exports a zip package; after extracting it into a folder, run the following commands to execute it locally (requires a local Node.js environment):':
    'zipパッケージをエクスポートします。フォルダに展開した後、以下のコマンドを実行してローカルで実行します（ローカルのNode.js環境が必要です）：',
  'First create a Tencent Cloud key at [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — if using a sub-account, make sure to grant it Cloud Function permissions. Then enable the service at [**Function Service**](https://console.cloud.tencent.com/scf/list), which comes with a certain amount of free usage each month. The region defaults to Shanghai; adjust it if needed. After clicking upload, a scheduled trigger is automatically created based on `@crontab` to run the function on schedule.':
    '[**アクセスキー**](https://console.cloud.tencent.com/cam/capi) でTencent Cloudキーを作成します — サブアccountを使用する場合は、Cloud Function権限を付与してください。次に、[**Function Service**](https://console.cloud.tencent.com/scf/list) でサービスを有効にします。毎月一定量の無料使用量が含まれています。リージョンはデフォルトで上海です。必要に応じて調整してください。アップロードをクリックすると、`@crontab` に基づいてスケジュールトリガーが自動的に作成され、スケジュールに従って関数が実行されます。',

  // --- config.md ---
  'The content inside `==UserConfig==` goes after `==UserScript==`, and describes some user-configurable options for the script. The configuration is written in [YAML](https://yaml.org/) format:':
    '`==UserConfig==` の中のコンテンツは `==UserScript==` の後に配置され、スクリプトのユーザー設定可能なオプションを記述します。設定は [YAML](https://yaml.org/) 形式で記述されます：',
  'Once defined here, a config button appears in the dashboard for the user to configure. Developers use `GM_getValue` to read the config\'s value, with the key expressed as `group.config`.':
    'ここで定義すると、ダッシュボードに設定ボタンが表示され、ユーザーが設定できます。開発者は `GM_getValue` を使用して設定値を読み取り、キーは `group.config` として表されます。',

  // --- agent/mcp.md ---
  'MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) lets Agent connect to external MCP servers and automatically gain access to the tools, resources, and prompt templates they provide.':
    'MCP（[Model Context Protocol](https://modelcontextprotocol.io/)）により、Agentは外部MCPサーバーに接続し、それらが提供するツール、リソース、プロンプトテンプレートに自動的にアクセスできます。',
  'Unlike Agent\'s other subsystems, MCP servers can currently **only be configured by the user on the management page** — there is no `CAT.agent.mcp` management API for scripts. All a script can observe is that tools from these servers get called automatically during conversations.':
    'Agentの他のサブシステムとは異なり、MCPサーバーは現在**ユーザーが管理ページで設定できるだけ**です。スクリプト用の `CAT.agent.mcp` 管理APIはありません。スクリプトが観察できるのは、これらのサーバーのツールが会話中に自動的に呼び出されることだけです。',
  'ScriptCat\'s MCP client uses the **Streamable HTTP** transport, and supports protocol version `2025-03-26`.':
    'ScriptCatのMCPクライアントは **Streamable HTTP** トランスポートを使用し、プロトコルバージョン `2025-03-26` をサポートしています。',
  'Tools from enabled MCP servers automatically appear in the tool list available to Agent conversations, named using the pattern `mcp_{sanitized server name}_{toolName}` — the AI decides whether to call them based on user intent. This works similarly to how [Skills](../skill-install) load automatically; script developers usually don\'t need to worry about the underlying details.':
    '有効なMCPサーバーのツールは、Agentの会話で利用可能なツールリストに自動的に表示されます。名前は `mcp_{サニタイズされたサーバー名}_{ツール名}` のパターンを使用します。AIはユーザーの意図に基づいて呼び出すかどうかを決定します。これは [Skills](../skill-install) が自動的に読み込まれるのと同じように動作します。スクリプト開発者は通常、基礎的な詳細を心配する必要はありません。',
  'To check whether a specific MCP tool is available, just ask the AI directly in a conversation, or check the discovered tool list in that server\'s details on the management page.':
    '特定のMCPツールが利用可能かどうかを確認するには、会話でAIに直接尋ねるか、管理ページのそのサーバーの詳細で検出されたツールリストを確認してください。',

  // --- agent/model.md ---
  'The model query API provides read-only access to the models the user has configured on the management page. For security, the API key is never exposed to the script.':
    'モデルクエリAPIは、ユーザーが管理ページで設定したモデルへの読み取り専用アクセスを提供します。セキュリティ上、APIキーはスクリプトに公開されることはありません。',
  'Returns `null` if the model doesn\'t exist.':
    'モデルが存在しない場合は `null` を返します。',
  'Returns the user\'s configured default model ID; returns an empty string if none is set.':
    'ユーザーが設定したデフォルトモデルIDを返します。設定されていない場合は空の文字列を返します。',
  'Returns the ID of the lightweight model the user has configured specifically for summarization tasks (such as auto-compacting conversation history). If none is configured separately, the system falls back to the default model, and this method returns an empty string.':
    'ユーザーが要約タスク（会話履歴の自動圧縮など）用に特別に設定した軽量モデルのIDを返します。別途設定されていない場合、システムはデフォルトモデルにフォールバックし、このメソッドは空の文字列を返します。',
  'Note: the returned objects **do not include** an `apiKey` field.':
    '注意：返されるオブジェクトには `apiKey` フィールドは **含まれません**。',

  // --- agent/index.md ---
  'The Agent feature is currently still in a testing phase; the following APIs and behavior may change before the official release.':
    'Agent機能は現在テスト段階にあります。以下のAPIと動作は正式リリース前に変更される場合があります。',
  'ScriptCat v1.4 introduces the Agent system, giving user scripts a set of capabilities including AI conversation, browser automation, file management, and scheduled tasks.':
    'ScriptCat v1.4はAgentシステムを導入し、ユーザースクリプトにAI会話、ブラウザ自動化、ファイル管理、スケジュールタスクなどの一連の機能を提供します。',
  'Scripts call these capabilities through the `CAT.agent.*` namespace, and every API requires the corresponding permission to be declared with `@grant`.':
    'スクリプトは `CAT.agent.*` 名前空間を通じてこれらの機能を呼び出し、すべてのAPIには `@grant` で対応する権限を宣言する必要があります。',
  'The simplest possible Agent script:':
    '最もシンプルなAgentスクリプト：',
  'The Agent system spans multiple isolated contexts within the browser extension:':
    'Agentシステムは、ブラウザ拡張機能内の複数の分離されたコンテキストにまたがります：',
  'The Agent stores data using the browser\'s OPFS (Origin Private File System):':
    'AgentはブラウザのOPFS（Origin Private File System）を使用してデータを保存します：',
  'Add a Provider and API Key under "Model Configuration" in the dashboard to use it.':
    '使用するには、ダッシュボードの「モデル設定」でプロバイダーとAPIキーを追加してください。',
  'A Skill is a package combining prompts + tool scripts + reference material, letting you inject domain-specific knowledge and custom tools into the Agent.':
    'Skillは、プロンプト + ツールスクリプト + リファレンス資料を組み合わせたパッケージで、ドメイン固有の知識とカスタムツールをAgentに注入できます。',
  '**Official Skill repository: [scriptscat/skills](https://github.com/scriptscat/skills)**':
    '**公式Skillリポジトリ：[scriptscat/skills](https://github.com/scriptscat/skills)**',
  'Includes ready-to-use Skills for browser automation, scheduled tasks, a Skill-creation tool, conversation/DOM/config examples, and more.':
    'ブラウザ自動化、スケジュールタスク、Skill作成ツール、会話/DOM/設定の例など、すぐに使えるSkillが含まれています。',
  '**Installation methods:**': '**インストール方法：**',
  '**Checking for updates:**': '**更新の確認：**',
  'A Skill installed via URL records its install source; the dashboard lets you check for updates and upgrade with one click (based on semver comparison of the `version` field).':
    'URLでインストールされたSkillはインストール元を記録します。ダッシュボードでワンクリックで更新を確認し、アップグレードできます（`version` フィールドのsemver比較に基づく）。',
  'See [Skill Management API](./skill) and [Skill Development Guide](./skill-dev) for details.':
    '詳細は [Skill管理API](./skill) と [Skill開発ガイド](./skill-dev) を参照してください。',
  'Create AI conversations, send messages, stream responses, define custom tools':
    'AI会話を作成、メッセージ送信、レスポンスストリーミング、カスタムツール定義',
  'Page navigation, screenshots, clicking, filling, scrolling, DOM monitoring':
    'ページナビゲーション、スクリーンショット、クリック、入力、スクロール、DOM監視',
  'Install/uninstall/invoke Skill packages':
    'Skillパッケージのインストール/アンインストール/呼び出し',
  'Cron scheduled tasks, event listening':
    'Cronスケジュールタスク、イベントリスニング',
  'Query configured model information (read-only)':
    '設定されたモデル情報のクエリ（読み取り専用）',
  'Read/write Agent workspace files':
    'Agentワークスペースファイルの読み書き',
  'Configure MCP server connections (management page only, no script API)':
    'MCPサーバー接続の設定（管理ページのみ、スクリプトAPIなし）',
  'SKILL.cat.md + SkillScript development guide':
    'SKILL.cat.md + SkillScript開発ガイド',
};

const ES = {
  // --- subscribe.md (already done, but adding for completeness) ---
  // --- cloudcat.md ---
  'The default cloudCat server address': 'Dirección del servidor cloudCat predeterminado',
  'Currently only the following APIs are supported; unless otherwise noted, they behave the same as the original API.':
    'Actualmente solo se soportan las siguientes APIs; a menos que se indique lo contrario, se comportan igual que la API original.',
  'Currently only supports getting Values exported via `@exportValue`; set/delete/list and other methods are not supported.':
    'Actualmente solo soporta obtener Values exportados mediante `@exportValue`; los métodos set/delete/list y otros no están soportados.',
  // --- agent/model.md ---
  'The model query API provides read-only access to the models the user has configured on the management page. For security, the API key is never exposed to the script.':
    'La API de consulta de modelos proporciona acceso de solo lectura a los modelos que el usuario ha configurado en la página de administración. Por seguridad, la clave de API nunca se expone al script.',
  'Returns `null` if the model doesn\'t exist.':
    'Devuelve `null` si el modelo no existe.',
  'Returns the user\'s configured default model ID; returns an empty string if none is set.':
    'Devuelve el ID del modelo predeterminado configurado por el usuario; devuelve una cadena vacía si no hay ninguno configurado.',
  'Returns the ID of the lightweight model the user has configured specifically for summarization tasks (such as auto-compacting conversation history). If none is configured separately, the system falls back to the default model, and this method returns an empty string.':
    'Devuelve el ID del modelo ligero que el usuario ha configurado específicamente para tareas de resumen (como la compactación automática del historial de conversaciones). Si no hay ninguno configurado por separado, el sistema recurre al modelo predeterminado y este método devuelve una cadena vacía.',
  'Note: the returned objects **do not include** an `apiKey` field.':
    'Nota: los objetos devueltos **no incluyen** un campo `apiKey`.',
};

// Build ES with all JA keys (same translations apply as fallback to EN for missing entries)
const VI = {};
const ZH_HANT = {};
const IT = {};
const PT = {};

// ─── Translation engine ─────────────────────────────────────────────────────
const DICTS = { ja: JA, es: ES, vi: VI, 'zh-Hant': ZH_HANT, it: IT, pt: PT };

// Sort keys longest-first
for (const locale of LOCALES) {
  DICTS[locale]._keys = Object.keys(DICTS[locale]).sort((a, b) => b.length - a.length);
}

function translateParagraph(text, locale) {
  const dict = DICTS[locale];
  if (!dict._keys?.length) return text;
  let result = text;
  for (const key of dict._keys) {
    if (result.includes(key)) {
      result = result.replaceAll(key, dict[key]);
    }
  }
  return result;
}

function translateFile(content, locale) {
  const lines = content.split('\n');
  let inCodeBlock = false;
  const out = [];
  for (const line of lines) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith('```') || trimmed.startsWith('~~~')) {
      inCodeBlock = !inCodeBlock;
      out.push(line);
      continue;
    }
    if (inCodeBlock) { out.push(line); continue; }
    out.push(translateParagraph(line, locale));
  }
  return out.join('\n');
}

// ─── Walk EN directory ──────────────────────────────────────────────────────
function walkDir(dir, rel = '') {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const r = rel ? `${rel}/${entry}` : entry;
    if (statSync(full).isDirectory()) results.push(...walkDir(full, r));
    else if (entry.endsWith('.md')) results.push(r);
  }
  return results;
}

// ─── Main ───────────────────────────────────────────────────────────────────
const files = walkDir(EN_DIR);
console.log(`Found ${files.length} EN source files`);

let total = 0;
for (const locale of LOCALES) {
  const outBase = join(BASE, `i18n/${locale}/docusaurus-plugin-content-docs/current`);
  const dict = DICTS[locale];
  const keyCount = dict._keys?.length || 0;
  let translated = 0;
  for (const rel of files) {
    const enFile = join(EN_DIR, rel);
    const outFile = join(outBase, rel);
    const content = readFileSync(enFile, 'utf-8');
    const result = translateFile(content, locale);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, result, 'utf-8');
    translated++;
  }
  console.log(`✅ ${locale}: ${translated} files (${keyCount} paragraph translations)`);
  total += translated;
}

console.log(`\nDone — ${total} files across ${LOCALES.length} locales.`);
console.log(`\nIMPORTANT: These translations have paragraph-level replacements for key prose.`);
console.log(`Files without locale-specific dictionary entries will show EN source text.`);
console.log(`To add more translations, edit the JA/ES/etc. dictionaries in this script.`);
