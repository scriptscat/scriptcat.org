---
id: background
---

# Background Scripts

Background scripts are suitable for continuously running scripts. Background scripts are unique to ScriptCat. They run in a sandbox and cannot manipulate DOM objects. You can use GM APIs consistent with Tampermonkey for development, with compatibility notes marked in the documentation.

## Background Scripts

Background scripts are declared with the `@background` attribute. Background scripts allow scripts to run continuously in the background after the script is enabled or the browser starts.

## Scheduled Scripts

> Scheduled scripts are also a type of background script, suitable for scripts that execute at regular intervals.

Scheduled scripts are declared with the `@crontab` attribute and can be called with second-level precision. They provide a `once` parameter, indicating execution once within a certain time period (considering cases when the browser is not open). It's recommended that script runtime and retry time should not exceed the scheduled interval.

You can use online tools to test cron expressions, replacing `once` with `*` in the extension: [Cron Online Tester](https://tool.lu/crontab/)

On the console page, hovering over the `Run Status` column will display the next execution time.

### Crontab Examples

> Please note that only the first crontab expression in a script takes effect. The `once` semantic means running only once at the current time position.

```javascript
//@crontab * * * * * * Run every second
//@crontab * * * * * Run every minute
//@crontab 0 */6 * * * Execute once at minute 0 of every 6 hours
//@crontab 15 */6 * * * Execute once at minute 15 of every 6 hours
//@crontab * once * * * Run once every hour
//@crontab * * once * * Run once every day
//@crontab * 10 once * * Run once between 10:00-10:59 daily. If it runs at 10:04, it won't run again from 10:05-10:59
//@crontab * 1,3,5 once * * Run once during 1 AM, 3 AM, or 5 AM daily. If it runs at 1 AM, it won't run at 3 AM or 5 AM
//@crontab * */4 once * * Check and run once every 4 hours daily. If it runs at 4 AM, it won't run at 8 AM, 12 PM, 4 PM, 8 PM, 12 AM, etc.
//@crontab * 10-23 once * * Run once between 10:00-23:59 daily. If it runs at 10:04, it won't run from 10:05-23:59
//@crontab * once 13 * * Run once every hour on the 13th of each month
```

## Logging

On the script list page, hovering over the `Run Status` column shows the script's running status. Clicking opens a popup showing log content printed via `GM_log`.

![Background Script Status](./background.assets/image-20210621214143661.png)

![Background Script Logs](./background.assets/image-20210621214124685.png)

## API Compatibility

Background scripts support most GM APIs with the following considerations:

### Supported APIs
- `GM_setValue` / `GM_getValue` - Data storage
- `GM_deleteValue` / `GM_listValues` - Data management
- `GM_xmlhttpRequest` - HTTP requests
- `GM_cookie` - Cookie operations
- `GM_notification` - Desktop notifications
- `GM_log` - Logging (background script specific)
- `GM_openInTab` - Open URLs in new tabs
- `GM_setClipboard` - Clipboard operations

### Unsupported APIs
- `GM_addStyle` - No DOM access in background
- `GM_getResourceText` / `GM_getResourceURL` - Limited resource access
- DOM manipulation functions - Background scripts run in sandbox

### Background Script Specific Features

#### GM_log
Background scripts can use `GM_log` to output logs that are viewable in the script management interface.

```javascript
// @background
GM_log("Background script started");
GM_log("Processing data...", data);
```

#### Persistent Execution
Background scripts continue running even when no web pages are open, making them ideal for:
- Periodic data synchronization
- Monitoring tasks
- Background processing
- Scheduled operations

#### Example Background Script

```javascript
// ==UserScript==
// @name         Background Example
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Example background script
// @author       You
// @background
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';
    
    GM_log("Background script initialized");
    
    // Example: Check for updates every 5 minutes
    setInterval(async () => {
        try {
            const response = await GM.xmlHttpRequest({
                method: "GET",
                url: "https://api.example.com/status"
            });
            
            const data = JSON.parse(response.responseText);
            await GM.setValue("lastCheck", Date.now());
            
            GM_log("Status check completed", data);
        } catch (error) {
            GM_log("Status check failed", error);
        }
    }, 5 * 60 * 1000); // 5 minutes
})();
```

#### Example Scheduled Script

```javascript
// ==UserScript==
// @name         Daily Report
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Generate daily report
// @author       You
// @crontab      0 9 * * * Daily at 9:00 AM
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';
    
    GM_log("Daily report script started");
    
    // Generate and send daily report
    async function generateReport() {
        try {
            const data = await GM.getValue("reportData", {});
            
            // Process report data
            const report = {
                date: new Date().toISOString().split('T')[0],
                summary: data
            };
            
            // Send report
            await GM.xmlHttpRequest({
                method: "POST",
                url: "https://api.example.com/reports",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(report)
            });
            
            GM_log("Daily report sent successfully");
        } catch (error) {
            GM_log("Failed to generate report", error);
        }
    }
    
    generateReport();
})();
```

## Best Practices

1. **Error Handling**: Always implement proper error handling in background scripts
2. **Resource Management**: Be mindful of memory usage in long-running scripts
3. **Logging**: Use `GM_log` for debugging and monitoring
4. **Graceful Degradation**: Handle cases where APIs might not be available
5. **Performance**: Avoid intensive operations that could impact browser performance

## Troubleshooting

### Common Issues

1. **Script Not Running**: Check if the `@background` or `@crontab` declaration is correct
2. **API Errors**: Verify that required `@grant` permissions are declared
3. **Timing Issues**: For scheduled scripts, verify cron expression syntax
4. **Memory Leaks**: Monitor long-running scripts for memory usage

### Debugging

Use the script management interface to:
- View script execution status
- Check log outputs via `GM_log`
- Monitor next execution times for scheduled scripts
- Restart scripts if needed

For more advanced debugging, you can also use browser developer tools to inspect background script behavior.
