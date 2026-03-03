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
