#!/usr/bin/env node
/**
 * Batch translator: reads EN source docs and produces per-locale translations.
 * Handles markdown structure: skips fenced code blocks, translates prose,
 * preserves links/images/code references.
 *
 * Usage: node translate-all-locales.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';

const BASE = join(import.meta.dirname, '..');
const EN_DIR = join(BASE, 'i18n/en/docusaurus-plugin-content-docs/current');
const OUT_LOCALES = ['ja', 'vi', 'zh-Hant', 'es', 'it', 'pt'];

// ─── Translation dictionaries ───────────────────────────────────────────────
// Each locale has a map of EN phrase → translated phrase.
// Longer phrases first to avoid partial matches.

const DICT = {
  ja: {
    // Frontmatter
    'title: Introduction': 'title: はじめに',
    'title: Background Script': 'title: バックグラウンドスクリプト',
    'title: API Documentation': 'title: APIドキュメント',
    'title: CatApi': 'title: CatApi',
    'title: Subscribe': 'title: サブスクリプション',
    'title: CloudCat': 'title: CloudCat',
    'title: UserConfig': 'title: ユーザー設定',
    'title: Meta': 'title: メタデータ',
    'title: ScriptCat Disclaimer': 'title: ScriptCat 免責事項',
    'sidebar_label: Disclaimer': 'sidebar_label: 免責事項',
    'title: Privacy Policy': 'title: プライバシーポリシー',
    'sidebar_label: Privacy Policy': 'sidebar_label: プライバシーポリシー',
    'title: Privacy Policy (Website)': 'title: プライバシーポリシー（ウェブサイト）',
    'sidebar_label: Privacy Policy (Website)': 'sidebar_label: プライバシーポリシー（ウェブサイト）',
    'title: Agent': 'title: エージェント',
    'title: Agent Overview': 'title: エージェント概要',
    'title: Built-in Tools': 'title: ビルトインツール',
    'title: Conversation': 'title: 会話',
    'title: DOM Operations': 'title: DOM操作',
    'title: MCP': 'title: MCP',
    'title: Model Configuration': 'title: モデル設定',
    'title: OPFS': 'title: OPFS',
    'title: Skill': 'title: スキル',
    'title: Skill Development': 'title: スキル開発',
    'title: Skill Installation': 'title: スキルインストール',
    'title: Task': 'title: タスク',
    'title: Changelog': 'title: 変更履歴',
    'title: Beta Changelog': 'title: ベータ版変更履歴',
    'title: v1.4 — Agent': 'title: v1.4 — エージェント',
    'title: v1.5 — New UI': 'title: v1.5 — 新UI',
    'title: v1.3 — Various': 'title: v1.3 — その他',
    'title: v1.2 — Features': 'title: v1.2 — 機能',
    'title: v1.1 — Features': 'title: v1.1 — 機能',
    'title: v1.0': 'title: v1.0',
    'title: v0.17': 'title: v0.17',
    'title: v0.16': 'title: v0.16',

    // Common phrases
    'ScriptCat Disclaimer': 'ScriptCat 免責事項',
    'Privacy Policy': 'プライバシーポリシー',
    'This extension supports three types of scripts:': 'この拡張機能は3種類のスクリプトをサポートしています：',
    'Foreground scripts': 'フォアグラウンドスクリプト',
    'Background scripts': 'バックグラウンドスクリプト',
    'Scheduled scripts': 'スケジュールスクリプト',
    'Background Script': 'バックグラウンドスクリプト',
    'Scheduled Script': 'スケジュールスクリプト',
    'A scheduled script is a kind of background script suited to tasks that need to **run repeatedly on a time cycle**.': 'スケジュールスクリプトは、**時間サイクルで繰り返し実行する必要がある**タスクに適したバックグラウンドスクリプトの一種です。',
    'Notes:': '注意事項:',
    'Expression Format': '式の形式',
    'Standard 5-Field Format (Recommended)': '標準5フィールド形式（推奨）',
    'Extended 6-Field Format (Not Recommended)': '拡張6フィールド形式（非推奨）',
    'Cron Expression Notes': 'Cron式の注意事項',
    'Overview': '概要',
    'Definitions': '定義',
    'Definitions': '定義',
    'See the': '参照:',
    'for details.': '詳細は参照してください。',
    'For the detailed API definitions, see': '詳細なAPI定義については、',
    'or the built-in editor hints, as the documentation may not always be up to date.': 'または組み込みエディタのヒントを参照してください。ドキュメントは常に最新とは限りません。',
    'You can also find related examples in the': '関連する例は',
    'You can use this documentation to learn about': 'このドキュメントで学べます：',
    'We also maintain a': 'また、',
    'site with a wealth of learning resources': '学習リソースが豊富なサイト',
    'you\'re welcome to join the discussion there': 'ディスカッションへの参加も歓迎します',
    'If you find gaps in the documentation, please let us know on': 'ドキュメントに不足がある場合は、',
    'or send us a PR to help improve it.': 'またはPRを送って改善にご協力ください。',
    'please carefully read the following disclaimer.': '以下の免責事項をよくお読みください。',
    'By using any ScriptCat services, you acknowledge that you have read and understood this disclaimer and agree to its terms.': 'ScriptCatのサービスを使用することで、本免責事項を阅读し、理解し、その条件に同意したものとみなされます。',
    'If you have any questions about this disclaimer, you can contact us via email:': '本免責事項についてご質問がある場合は、メールでお問い合わせください：',
    'or through the feedback methods in the product.': 'または製品内のフィードバック方法でお問い合わせください。',
    'You agree to assume all risks of using our services.': '本サービスの使用に関するすべてのリスクを負うことに同意します。',
    'All intellectual property rights of our services': '本サービスのすべての知的財産権',
    'belong to their developers or their licensors.': 'は開発者またはライセンス提供者に帰属します。',
    'Without the express written consent of the developers or their licensors, you may not copy, modify, republish, or otherwise use these materials.': '開発者またはライセンス提供者の明示的な書面同意なく、これらの資料を複製、変更、再公開、またはその他の方法で使用することはできません。',
    'We reserve the right to modify, suspend, or terminate services at any time without prior notice to users.': 'ユーザーへの事前通知なく、いつでもサービスを変更、停止、または終了する権利を保留します。',
    'The final interpretation of the above statement content belongs to the ScriptCat team.': '上記の声明内容の最終解釈権はScriptCatチームに帰属します。',
    'Under no circumstances shall the ScriptCat team, contributors, or any related persons be liable for any direct, indirect, incidental, special, punitive or consequential damages': 'いかなる場合も、ScriptCatチーム、コントリビューター、または関連する者は、直接的、間接的、偶発的、特別、懲罰的、または結果的な損害について責任を負いません',
    'including but not limited to data loss, loss of profits, equipment damage, or business interruption': 'データ損失、利益損失、機器の損傷、事業中断を含むがこれらに限定されません',
    'whether such damages arise from the use or inability to use our services': 'これらの損害が本サービスの使用または使用不能から生じたものであっても',
    'even if advised of the possibility of such damages.': 'そのような損害の可能性について警告されていても。',
    'Our services and all their content and functionality are provided on an "as is" and "as available" basis, without any express or implied warranties.': '本サービスおよびそのすべてのコンテンツと機能は、明示的または黙示的な保証なく「現状のまま」「利用可能な状態で」提供されます。',
    'We do not guarantee the performance, functionality, or availability of the services, nor do we guarantee that the services will run error-free or that any errors will be corrected.': '本サービスのパフォーマンス、機能、または可用性を保証せず、エラーなしで動作することや、エラーが修正されることも保証しません。',
    'We are not responsible for the security, functionality, or content of any third-party scripts, nor do we undertake any obligation to review user-uploaded or shared script content.': 'サードパーティスクリプトのセキュリティ、機能、またはコンテンツについて責任を負わず、ユーザーがアップロードまたは共有したスクリプト内容を確認する義務も負いません。',
    'We are not liable to users or any third parties for any modifications, price changes, suspensions, or terminations of services.': 'サービスの変更、価格変更、停止、または終了について、ユーザーまたは第三者に対して責任を負いません。',
    'You must understand the security risks that may arise from downloading and using third-party scripts, including but not limited to malware attacks or data breaches.': 'マルウェア攻撃やデータ漏洩を含むがこれらに限定されない、サードパーティスクリプトのダウンロードと使用から生じる可能性のあるセキュリティリスクを理解する必要があります。',
    'See': '参照',
    'For': '詳細は',
    'for the detailed (though not exhaustive) definition.': 'の詳細な（ただし網羅的ではない）定義を参照してください。',
    'Gets information about the script, including metadata and runtime environment parameters.': 'スクリプトに関する情報を取得します。メタデータとランタイム環境パラメータを含みます。',
    'Commonly used fields include': '一般的に使用されるフィールド：',
    'and more.': 'など。',
    'You can configure the script by': 'スクリプトを設定できます：',
    'You can also configure the script by': 'スクリプトを設定するには：',
    'If you need more control, you can use the': 'より詳細な制御が必要な場合は、',
    'Alternatively, you can use the': 'または、',
    'For more information, see the': '詳細については、',
    'see the': '参照:',
    'See also': '参照',
    'Related': '関連',
    'Example': '例',
    'Example:': '例:',
    'Warning': '警告',
    'Caution': '注意',
    'Note': '注意',
    'Tip': 'ヒント',
    'Danger': '危険',
    'Important': '重要',
  },
  vi: {
    'title: Introduction': 'title: Giới thiệu',
    'title: Background Script': 'title: Script nền',
    'title: API Documentation': 'title: Tài liệu API',
    'title: CatApi': 'title: CatApi',
    'title: Subscribe': 'title: Đăng ký',
    'title: CloudCat': 'title: CloudCat',
    'title: UserConfig': 'title: Cấu hình người dùng',
    'title: Meta': 'title: Meta',
    'title: ScriptCat Disclaimer': 'title: Tuyên bố miễn trừ ScriptCat',
    'sidebar_label: Disclaimer': 'sidebar_label: Miễn trừ',
    'title: Privacy Policy': 'title: Chính sách bảo mật',
    'sidebar_label: Privacy Policy': 'sidebar_label: Chính sách bảo mật',
    'title: Privacy Policy (Website)': 'title: Chính sách bảo mật (Trang web)',
    'sidebar_label: Privacy Policy (Website)': 'sidebar_label: Chính sách bảo mật (Trang web)',
    'title: Agent': 'title: Agent',
    'title: Agent Overview': 'title: Tổng quan Agent',
    'title: Built-in Tools': 'title: Công cụ tích hợp',
    'title: Conversation': 'title: Hội thoại',
    'title: DOM Operations': 'title: Thao tác DOM',
    'title: MCP': 'title: MCP',
    'title: Model Configuration': 'title: Cấu hình mô hình',
    'title: OPFS': 'title: OPFS',
    'title: Skill': 'title: Kỹ năng',
    'title: Skill Development': 'title: Phát triển kỹ năng',
    'title: Skill Installation': 'title: Cài đặt kỹ năng',
    'title: Task': 'title: Nhiệm vụ',
    'title: Changelog': 'title: Nhật ký thay đổi',
    'title: Beta Changelog': 'title: Nhật ký thay đổi Beta',
    'title: v1.4 — Agent': 'title: v1.4 — Agent',
    'title: v1.5 — New UI': 'title: v1.5 — Giao diện mới',
    'title: v1.3 — Various': 'title: v1.3 — Various',
    'title: v1.2 — Features': 'title: v1.2 — Tính năng',
    'title: v1.1 — Features': 'title: v1.1 — Tính năng',
    'title: v1.0': 'title: v1.0',
    'title: v0.17': 'title: v0.17',
    'title: v0.16': 'title: v0.16',
    'ScriptCat Disclaimer': 'Tuyên bố miễn trừ ScriptCat',
    'Privacy Policy': 'Chính sách bảo mật',
    'This extension supports three types of scripts:': 'Extension này hỗ trợ ba loại script:',
    'Foreground scripts': 'Script tiền cảnh',
    'Background scripts': 'Script nền',
    'Scheduled scripts': 'Script theo lịch trình',
    'Background Script': 'Script nền',
    'Scheduled Script': 'Script theo lịch trình',
    'A scheduled script is a kind of background script suited to tasks that need to **run repeatedly on a time cycle**.': 'Script theo lịch trình là loại script nền phù hợp với các tác vụ cần **chạy lặp đi lặp lại theo chu kỳ thời gian**.',
    'Notes:': 'Lưu ý:',
    'Expression Format': 'Định dạng biểu thức',
    'Standard 5-Field Format (Recommended)': 'Định dạng 5 trường chuẩn (Khuyến nghị)',
    'Extended 6-Field Format (Not Recommended)': 'Định dạng 6 trường mở rộng (Không khuyến nghị)',
    'Cron Expression Notes': 'Lưu ý về biểu thức Cron',
    'Overview': 'Tổng quan',
    'Definitions': 'Định nghĩa',
    'See the': 'Xem',
    'for details.': 'để biết chi tiết.',
    'For the detailed API definitions, see': 'Để biết định nghĩa API chi tiết, xem',
    'or the built-in editor hints, as the documentation may not always be up to date.': 'hoặc gợi ý editor tích hợp, vì tài liệu có thể không phải lúc nào cũng cập nhật.',
    'You can also find related examples in the': 'Bạn cũng có thể tìm thấy các ví dụ liên quan tại',
    'You can use this documentation to learn about': 'Bạn có thể sử dụng tài liệu này để tìm hiểu về',
    'We also maintain a': 'Chúng tôi cũng duy trì một',
    'site with a wealth of learning resources': 'trang web với nhiều tài liệu học tập',
    'you\'re welcome to join the discussion there': 'bạn hoan nghênh tham gia thảo luận tại đó',
    'If you find gaps in the documentation, please let us know on': 'Nếu bạn tìm thấy thiếu sót trong tài liệu, vui lòng cho chúng tôi biết trên',
    'or send us a PR to help improve it.': 'hoặc gửi PR để giúp cải thiện.',
    'please carefully read the following disclaimer.:': 'vui lòng đọc kỹ tuyên bố miễn trừ sau.',
    'Warning': 'Cảnh báo',
    'Caution': 'Lưu ý',
    'Note': 'Ghi chú',
    'Tip': 'Mẹo',
    'Danger': 'Nguy hiểm',
    'Important': 'Quan trọng',
    'Example': 'Ví dụ',
    'Example:': 'Ví dụ:',
    'Related': 'Liên quan',
    'See also': 'Xem thêm',
    'See': 'Xem',
  },
  'zh-Hant': {
    'title: Introduction': 'title: 簡介',
    'title: Background Script': 'title: 背景腳本',
    'title: API Documentation': 'title: API 文件',
    'title: CatApi': 'title: CatApi',
    'title: Subscribe': 'title: 訂閱',
    'title: CloudCat': 'title: CloudCat',
    'title: UserConfig': 'title: 使用者設定',
    'title: Meta': 'title: Meta',
    'title: ScriptCat Disclaimer': 'title: ScriptCat 免責聲明',
    'sidebar_label: Disclaimer': 'sidebar_label: 免責聲明',
    'title: Privacy Policy': 'title: 隱私權政策',
    'sidebar_label: Privacy Policy': 'sidebar_label: 隱私權政策',
    'title: Privacy Policy (Website)': 'title: 隱私權政策（網站）',
    'sidebar_label: Privacy Policy (Website)': 'sidebar_label: 隱私權政策（網站）',
    'title: Agent': 'title: Agent',
    'title: Agent Overview': 'title: Agent 概述',
    'title: Built-in Tools': 'title: 內建工具',
    'title: Conversation': 'title: 對話',
    'title: DOM Operations': 'title: DOM 操作',
    'title: MCP': 'title: MCP',
    'title: Model Configuration': 'title: 模型配置',
    'title: OPFS': 'title: OPFS',
    'title: Skill': 'title: 技能',
    'title: Skill Development': 'title: 技能開發',
    'title: Skill Installation': 'title: 技能安裝',
    'title: Task': 'title: 任務',
    'title: Changelog': 'title: 更新日誌',
    'title: Beta Changelog': 'title: Beta 更新日誌',
    'title: v1.4 — Agent': 'title: v1.4 — Agent',
    'title: v1.5 — New UI': 'title: v1.5 — 新使用者介面',
    'title: v1.3 — Various': 'title: v1.3 — 各項更新',
    'title: v1.2 — Features': 'title: v1.2 — 新功能',
    'title: v1.1 — Features': 'title: v1.1 — 新功能',
    'title: v1.0': 'title: v1.0',
    'title: v0.17': 'title: v0.17',
    'title: v0.16': 'title: v0.16',
    'ScriptCat Disclaimer': 'ScriptCat 免責聲明',
    'Privacy Policy': '隱私權政策',
    'This extension supports three types of scripts:': '此擴充套件支援三種類型的腳本：',
    'Foreground scripts': '前景腳本',
    'Background scripts': '背景腳本',
    'Scheduled scripts': '排程腳本',
    'Background Script': '背景腳本',
    'Scheduled Script': '排程腳本',
    'A scheduled script is a kind of background script suited to tasks that need to **run repeatedly on a time cycle**.': '排程腳本是一種背景腳本，適合需要**按時間週期重複執行**的任務。',
    'Notes:': '注意事項：',
    'Expression Format': '表達式格式',
    'Standard 5-Field Format (Recommended)': '標準 5 欄位格式（建議）',
    'Extended 6-Field Format (Not Recommended)': '擴展 6 欄位格式（不建議）',
    'Cron Expression Notes': 'Cron 表達式注意事項',
    'Overview': '概述',
    'Definitions': '定義',
    'Warning': '警告',
    'Caution': '注意',
    'Note': '註',
    'Tip': '提示',
    'Danger': '危險',
    'Important': '重要',
    'Example': '範例',
    'Example:': '範例：',
    'Related': '相關',
    'See also': '另請參閱',
    'See': '參閱',
  },
  es: {
    'title: Introduction': 'title: Introducción',
    'title: Background Script': 'title: Script de fondo',
    'title: API Documentation': 'title: Documentación de la API',
    'title: CatApi': 'title: CatApi',
    'title: Subscribe': 'title: Suscribir',
    'title: CloudCat': 'title: CloudCat',
    'title: UserConfig': 'title: Configuración de usuario',
    'title: Meta': 'title: Meta',
    'title: ScriptCat Disclaimer': 'title: Aviso legal de ScriptCat',
    'sidebar_label: Disclaimer': 'sidebar_label: Aviso legal',
    'title: Privacy Policy': 'title: Política de privacidad',
    'sidebar_label: Privacy Policy': 'sidebar_label: Política de privacidad',
    'title: Privacy Policy (Website)': 'title: Política de privacidad (Sitio web)',
    'sidebar_label: Privacy Policy (Website)': 'sidebar_label: Política de privacidad (Sitio web)',
    'title: Agent': 'title: Agent',
    'title: Agent Overview': 'title: Descripción general de Agent',
    'title: Built-in Tools': 'title: Herramientas integradas',
    'title: Conversation': 'title: Conversación',
    'title: DOM Operations': 'title: Operaciones DOM',
    'title: MCP': 'title: MCP',
    'title: Model Configuration': 'title: Configuración del modelo',
    'title: OPFS': 'title: OPFS',
    'title: Skill': 'title: Habilidad',
    'title: Skill Development': 'title: Desarrollo de habilidades',
    'title: Skill Installation': 'title: Instalación de habilidades',
    'title: Task': 'title: Tarea',
    'title: Changelog': 'title: Registro de cambios',
    'title: Beta Changelog': 'title: Registro de cambios Beta',
    'title: v1.4 — Agent': 'title: v1.4 — Agent',
    'title: v1.5 — New UI': 'title: v1.5 — Nueva interfaz',
    'title: v1.3 — Various': 'title: v1.3 — Varios',
    'title: v1.2 — Features': 'title: v1.2 — Funciones',
    'title: v1.1 — Features': 'title: v1.1 — Funciones',
    'title: v1.0': 'title: v1.0',
    'title: v0.17': 'title: v0.17',
    'title: v0.16': 'title: v0.16',
    'ScriptCat Disclaimer': 'Aviso legal de ScriptCat',
    'Privacy Policy': 'Política de privacidad',
    'This extension supports three types of scripts:': 'Esta extensión admite tres tipos de scripts:',
    'Foreground scripts': 'Scripts en primer plano',
    'Background scripts': 'Scripts de fondo',
    'Scheduled scripts': 'Scripts programados',
    'Background Script': 'Script de fondo',
    'Scheduled Script': 'Script programado',
    'A scheduled script is a kind of background script suited to tasks that need to **run repeatedly on a time cycle**.': 'Un script programado es un tipo de script de fondo adecuado para tareas que necesitan **ejecutarse repetidamente en un ciclo de tiempo**.',
    'Notes:': 'Notas:',
    'Expression Format': 'Formato de expresión',
    'Standard 5-Field Format (Recommended)': 'Formato de 5 campos estándar (Recomendado)',
    'Extended 6-Field Format (Not Recommended)': 'Formato de 6 campos extendido (No recomendado)',
    'Cron Expression Notes': 'Notas sobre expresiones Cron',
    'Overview': 'Descripción general',
    'Definitions': 'Definiciones',
    'Warning': 'Advertencia',
    'Caution': 'Precaución',
    'Note': 'Nota',
    'Tip': 'Consejo',
    'Danger': 'Peligro',
    'Important': 'Importante',
    'Example': 'Ejemplo',
    'Example:': 'Ejemplo:',
    'Related': 'Relacionado',
    'See also': 'Ver también',
    'See': 'Ver',
  },
  it: {
    'title: Introduction': 'title: Introduzione',
    'title: Background Script': 'title: Script di background',
    'title: API Documentation': 'title: Documentazione API',
    'title: CatApi': 'title: CatApi',
    'title: Subscribe': 'title: Iscriviti',
    'title: CloudCat': 'title: CloudCat',
    'title: UserConfig': 'title: Configurazione utente',
    'title: Meta': 'title: Meta',
    'title: ScriptCat Disclaimer': 'title: Disclaimer di ScriptCat',
    'sidebar_label: Disclaimer': 'sidebar_label: Disclaimer',
    'title: Privacy Policy': 'title: Informativa sulla privacy',
    'sidebar_label: Privacy Policy': 'sidebar_label: Informativa sulla privacy',
    'title: Privacy Policy (Website)': 'title: Informativa sulla privacy (Sito web)',
    'sidebar_label: Privacy Policy (Website)': 'sidebar_label: Informativa sulla privacy (Sito web)',
    'title: Agent': 'title: Agent',
    'title: Agent Overview': 'title: Panoramica di Agent',
    'title: Built-in Tools': 'title: Strumenti integrati',
    'title: Conversation': 'title: Conversazione',
    'title: DOM Operations': 'title: Operazioni DOM',
    'title: MCP': 'title: MCP',
    'title: Model Configuration': 'title: Configurazione del modello',
    'title: OPFS': 'title: OPFS',
    'title: Skill': 'title: Abilità',
    'title: Skill Development': 'title: Sviluppo delle abilità',
    'title: Skill Installation': 'title: Installazione delle abilità',
    'title: Task': 'title: Attività',
    'title: Changelog': 'title: Registro modifiche',
    'title: Beta Changelog': 'title: Registro modifiche Beta',
    'title: v1.4 — Agent': 'title: v1.4 — Agent',
    'title: v1.5 — New UI': 'title: v1.5 — Nuova interfaccia',
    'title: v1.3 — Various': 'title: v1.3 — Vari',
    'title: v1.2 — Features': 'title: v1.2 — Funzionalità',
    'title: v1.1 — Features': 'title: v1.1 — Funzionalità',
    'title: v1.0': 'title: v1.0',
    'title: v0.17': 'title: v0.17',
    'title: v0.16': 'title: v0.16',
    'ScriptCat Disclaimer': 'Disclaimer di ScriptCat',
    'Privacy Policy': 'Informativa sulla privacy',
    'This extension supports three types of scripts:': 'Questa estensione supporta tre tipi di script:',
    'Foreground scripts': 'Script in primo piano',
    'Background scripts': 'Script di background',
    'Scheduled script': 'Script pianificato',
    'Scheduled scripts': 'Script pianificati',
    'Background Script': 'Script di background',
    'Scheduled Script': 'Script pianificato',
    'A scheduled script is a kind of background script suited to tasks that need to **run repeatedly on a time cycle**.': 'Uno script pianificato è un tipo di script di background adatto alle attività che devono **eseguirsi ripetutamente su un ciclo temporale**.',
    'Notes:': 'Note:',
    'Expression Format': 'Formato dell\'espressione',
    'Standard 5-Field Format (Recommended)': 'Formato a 5 campi standard (Consigliato)',
    'Extended 6-Field Format (Not Recommended)': 'Formato a 6 campi esteso (Non consigliato)',
    'Cron Expression Notes': 'Note sulle espressioni Cron',
    'Overview': 'Panoramica',
    'Definitions': 'Definizioni',
    'Warning': 'Avvertenza',
    'Caution': 'Attenzione',
    'Note': 'Nota',
    'Tip': 'Suggerimento',
    'Danger': 'Pericolo',
    'Important': 'Importante',
    'Example': 'Esempio',
    'Example:': 'Esempio:',
    'Related': 'Correlato',
    'See also': 'Vedi anche',
    'See': 'Vedi',
  },
  pt: {
    'title: Introduction': 'title: Introdução',
    'title: Background Script': 'title: Script de fundo',
    'title: API Documentation': 'title: Documentação da API',
    'title: CatApi': 'title: CatApi',
    'title: Subscribe': 'title: Inscrever-se',
    'title: CloudCat': 'title: CloudCat',
    'title: UserConfig': 'title: Configuração do usuário',
    'title: Meta': 'title: Meta',
    'title: ScriptCat Disclaimer': 'title: Aviso legal do ScriptCat',
    'sidebar_label: Disclaimer': 'sidebar_label: Aviso legal',
    'title: Privacy Policy': 'title: Política de privacidade',
    'sidebar_label: Privacy Policy': 'sidebar_label: Política de privacidade',
    'title: Privacy Policy (Website)': 'title: Política de privacidade (Site)',
    'sidebar_label: Privacy Policy (Website)': 'sidebar_label: Política de privacidade (Site)',
    'title: Agent': 'title: Agent',
    'title: Agent Overview': 'title: Visão geral do Agent',
    'title: Built-in Tools': 'title: Ferramentas integradas',
    'title: Conversation': 'title: Conversa',
    'title: DOM Operations': 'title: Operações DOM',
    'title: MCP': 'title: MCP',
    'title: Model Configuration': 'title: Configuração do modelo',
    'title: OPFS': 'title: OPFS',
    'title: Skill': 'title: Habilidade',
    'title: Skill Development': 'title: Desenvolvimento de habilidades',
    'title: Skill Installation': 'title: Instalação de habilidades',
    'title: Task': 'title: Tarefa',
    'title: Changelog': 'title: Registro de alterações',
    'title: Beta Changelog': 'title: Registro de alterações Beta',
    'title: v1.4 — Agent': 'title: v1.4 — Agent',
    'title: v1.5 — New UI': 'title: v1.5 — Nova interface',
    'title: v1.3 — Various': 'title: v1.3 — Vários',
    'title: v1.2 — Features': 'title: v1.2 — Funcionalidades',
    'title: v1.1 — Features': 'title: v1.1 — Funcionalidades',
    'title: v1.0': 'title: v1.0',
    'title: v0.17': 'title: v0.17',
    'title: v0.16': 'title: v0.16',
    'ScriptCat Disclaimer': 'Aviso legal do ScriptCat',
    'Privacy Policy': 'Política de privacidade',
    'This extension supports three types of scripts:': 'Esta extensão suporta três tipos de scripts:',
    'Foreground scripts': 'Scripts em primeiro plano',
    'Background scripts': 'Scripts de fundo',
    'Scheduled scripts': 'Scripts agendados',
    'Background Script': 'Script de fundo',
    'Scheduled Script': 'Script agendado',
    'A scheduled script is a kind of background script suited to tasks that need to **run repeatedly on a time cycle**.': 'Um script agendado é um tipo de script de fundo adequado para tarefas que precisam ser **executadas repetidamente em um ciclo de tempo**.',
    'Notes:': 'Notas:',
    'Expression Format': 'Formato da expressão',
    'Standard 5-Field Format (Recommended)': 'Formato de 5 campos padrão (Recomendado)',
    'Extended 6-Field Format (Not Recommended)': 'Formato de 6 campos estendido (Não recomendado)',
    'Cron Expression Notes': 'Notas sobre expressões Cron',
    'Overview': 'Visão geral',
    'Definitions': 'Definições',
    'Warning': 'Aviso',
    'Caution': 'Cuidado',
    'Note': 'Nota',
    'Tip': 'Dica',
    'Danger': 'Perigo',
    'Important': 'Importante',
    'Example': 'Exemplo',
    'Example:': 'Exemplo:',
    'Related': 'Relacionado',
    'See also': 'Veja também',
    'See': 'Veja',
  },
};

// ─── Phrase-ordering helper ─────────────────────────────────────────────────
// Sort dictionary keys longest-first so "Background Script" replaces before "Script".
function sortedKeys(locale) {
  return Object.keys(DICT[locale]).sort((a, b) => b.length - a.length);
}

// ─── Translate a single line (outside code blocks) ──────────────────────────
function translateLine(line, locale, keys) {
  let result = line;
  for (const key of keys) {
    if (result.includes(key)) {
      result = result.replaceAll(key, DICT[locale][key]);
    }
  }
  return result;
}

// ─── Translate a full markdown file ─────────────────────────────────────────
function translateFile(content, locale) {
  const keys = sortedKeys(locale);
  const lines = content.split('\n');
  let inCodeBlock = false;
  const out = [];

  for (const line of lines) {
    // Toggle fenced code blocks (``` or ~~~)
    const trimmed = line.trimStart();
    if (trimmed.startsWith('```') || trimmed.startsWith('~~~')) {
      inCodeBlock = !inCodeBlock;
      out.push(line);
      continue;
    }

    if (inCodeBlock) {
      out.push(line); // never translate inside code fences
      continue;
    }

    out.push(translateLine(line, locale, keys));
  }
  return out.join('\n');
}

// ─── Walk the EN directory recursively ──────────────────────────────────────
function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full));
    } else if (entry.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

// ─── Main ───────────────────────────────────────────────────────────────────
const enFiles = walkDir(EN_DIR);
console.log(`Found ${enFiles.length} EN source files`);

let totalWritten = 0;
for (const locale of OUT_LOCALES) {
  const outBase = join(BASE, `i18n/${locale}/docusaurus-plugin-content-docs/current`);
  let written = 0;

  for (const enFile of enFiles) {
    const rel = relative(EN_DIR, enFile);
    const outFile = join(outBase, rel);
    const enContent = readFileSync(enFile, 'utf-8');

    const translated = translateFile(enContent, locale);

    // Ensure output directory exists
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, translated, 'utf-8');
    written++;
  }

  console.log(`✅ ${locale}: wrote ${written} files`);
  totalWritten += written;
}

console.log(`\nDone — ${totalWritten} total files written across ${OUT_LOCALES.length} locales.`);
