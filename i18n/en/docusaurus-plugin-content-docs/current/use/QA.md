---
title: Frequently Asked Questions
---

## Developer Mode / User Script Permissions

#### Q: ScriptCat shows "Developer mode not enabled" and scripts won't run?

Starting from Chrome 120+ and newer Edge versions, browsers require users to manually enable permissions for scripts to run. Please refer to [Enable Browser User Scripts Support](/docs/use/open-dev/) for setup instructions.

If already enabled but the warning persists, try restarting your browser or reloading the extension.

## Scripts Not Working

#### Q: Installed a script but it has no effect?

1. **"Allow User Scripts" not enabled** — See [Enable Browser User Scripts Support](/docs/use/open-dev/)
2. **Cold start** — Scripts may not load immediately when the browser first opens. Try refreshing the page
3. **Extension conflicts** — Ad blockers (e.g., uBlock Origin) may cause script errors

#### Q: Script works in Tampermonkey but not in ScriptCat?

ScriptCat and Tampermonkey have some differences in API implementation. Please update to the latest version. If the issue persists, submit an Issue on [GitHub](https://github.com/scriptscat/scriptcat/issues).

## CSP / Trusted Types restrictions {#csp-trusted-types}

#### Q: What can I do if a site's CSP prevents a script from working?

In ScriptCat's **Network Rules**, choose **Tools → Network rules → New rule → Remove CSP**. Set **Websites** to only the site where the problem occurs, such as `example.com`. Save the rule, then refresh pages that are already open.

The **Remove CSP** template removes CSP response headers from main-frame and subframe document requests. You can also choose to remove `X-Frame-Options`.

#### Q: What should I do about `This document requires 'TrustedHTML' assignment.`?

This usually means the browser rejected a DOM operation because the site enforces Trusted Types. A site can enable Trusted Types with the CSP directive `require-trusted-types-for 'script'`; a userscript that performs an operation the policy disallows may trigger this error. The browser is enforcing the site's security policy, so this message alone does not show that ScriptCat caused the problem.

If an enforcing CSP response header on the document enables the restriction, a site-specific **Remove CSP** rule may help. It will not necessarily resolve the error if its cause is not one of the removable CSP response headers.

#### Q: Why doesn't ScriptCat remove CSP from every website by default?

CSP and Trusted Types help reduce risks such as cross-site scripting (XSS). Removing CSP weakens the matched website's existing security protections. Create a rule only for sites where it is actually needed. ScriptCat supports the **All websites** scope, but asks for confirmation before saving it.

:::warning Security notice

Avoid the **All websites** scope unless you understand and accept the security impact.

:::

:::info About a ScriptCat Trusted Types compatibility issue

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) also included a `GM_xmlhttpRequest` compatibility issue, which was fixed in [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242). That fix does not disable or bypass Trusted Types, and it does not change a website's CSP. If you are using an older ScriptCat version, update to the current version.

:::

## Cloud Sync Issues

> For basic sync usage, see [Sync & Backup](/docs/use/sync/).

#### Q: Having problems with OneDrive / Google Drive / WebDAV sync?

1. **Deleted scripts reappear** — Make sure "sync deletion" is enabled on all devices

## Script Installation Issues

> For how to install scripts, see [Install Scripts](/docs/use/script_installation/).

## Cookie Authorization Issues

#### Q: GM_cookie can't get cookies?

1. **Authorization popup not appearing** — Make sure `GM_cookie` is properly declared in the script's `@grant`, and use `@connect` to declare the domains that need to be accessed

## Script Data Loss

#### Q: All scripts disappeared after opening the browser?

1. **Initialization delay** — ScriptCat may still be loading data when the browser starts. Wait a few seconds or restart the browser
2. **Cleanup software** — Tools like 360 Security Guard or CCleaner may clear extension data. Exclude browser extension data in cleanup settings
3. **Regular backups recommended** — Use the export feature or [cloud sync](/docs/use/sync/) to regularly back up scripts and settings
