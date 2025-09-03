---
id: subscribe
---

# Subscription Mode

The file header must use `UserSubscribe` instead of `UserScript`. Installation links should use the `.user.sub.js` suffix and must use `https` links.

Subscription scripts only show the installation interface for user confirmation during initial installation, but subsequent updates use silent updates unless `connect` permissions change, in which case an update interface will appear for user confirmation.

A subscription script can describe installation links for multiple required scripts. Scripts installed through subscription mode use silent installation without showing confirmation pages. Installed scripts will appear in the script list, but `connect` permissions will use those declared in the subscription rather than the script's own `connect` permissions.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Subscribe to xxx series scripts
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Subscription Updates and Script Updates

Based on the user's configured `update interval`, the system periodically checks for updates through the subscription link. The `version` field must be configured for this to work.

Each subscription update compares script links with installed scripts. Scripts not in the new subscription will be deleted, and new scripts will be silently installed. Script updates use the script's own `version` for updating, consistent with normal script update logic.

## Silent Installation

Subscription scripts use silent installation. When subscriptions add/remove scripts, only a notification appears without user confirmation. Script update mechanisms remain unchanged and require user confirmation, unless the user has enabled `Settings -> Silent update scripts for non-critical changes`, in which case updates follow that rule. Due to the silent update mechanism, please choose safe and trustworthy subscription sources.

## Metadata

Some metadata meanings change in subscription scripts:

### name

Subscription name (can be modified in the subscription list)

### description

Subscription description, describing the purpose of this subscription

### version

Subscription version, used for update detection. Must follow semantic versioning.

### author

Subscription author

### connect

Domains that subscribed scripts can connect to. This overrides individual script `connect` permissions.

```js
// @connect      api.example.com
// @connect      *.example.com
// @connect      *
```

### scriptUrl

URLs of scripts to install through this subscription. Multiple `@scriptUrl` entries are supported.

```js
// @scriptUrl    https://example.com/script1.user.js
// @scriptUrl    https://example.com/script2.user.js
// @scriptUrl    https://example.com/script3.user.js
```

### updateURL

URL for subscription updates (optional)

```js
// @updateURL    https://example.com/subscription.meta.js
```

### homepageURL / supportURL

Homepage and support URLs for the subscription

```js
// @homepageURL  https://github.com/user/subscription
// @supportURL   https://github.com/user/subscription/issues
```

## Subscription Lifecycle

### 1. Installation
- User clicks subscription link (`.user.sub.js`)
- Installation dialog appears showing subscription details
- User confirms installation
- All scripts listed in `@scriptUrl` are silently installed
- Subscription is added to subscription list

### 2. Updates
- System checks for subscription updates based on update interval
- If subscription version changes, update is downloaded
- Script list is compared:
  - New scripts are silently installed
  - Removed scripts are deleted
  - Existing scripts update based on their own version

### 3. Management
- Users can view subscriptions in the subscription list
- Users can manually update subscriptions
- Users can unsubscribe (removes subscription and all its scripts)

## Best Practices

### 1. Use HTTPS
Always use HTTPS for subscription and script URLs:

```js
// Good
// @scriptUrl    https://example.com/script.user.js

// Avoid
// @scriptUrl    http://example.com/script.user.js
```

### 2. Version Management
Use semantic versioning for subscriptions:

```js
// @version      1.0.0    // Initial release
// @version      1.1.0    // New scripts added
// @version      1.0.1    // Bug fixes
// @version      2.0.0    // Breaking changes
```

### 3. Minimal Permissions
Only request necessary `connect` permissions:

```js
// Good - specific domains
// @connect      api.example.com
// @connect      cdn.example.com

// Avoid - overly broad
// @connect      *
```

### 4. Clear Documentation
Provide clear descriptions of what the subscription does:

```js
// @name         Development Tools Collection
// @description  A curated collection of development productivity scripts
```

### 5. Reliable Sources
Only include scripts from trusted sources in your subscription:

```js
// Good - reputable sources
// @scriptUrl    https://github.com/user/repo/raw/main/script.user.js
// @scriptUrl    https://greasyfork.org/scripts/12345/code/script.user.js
```

## Example Complete Subscription

```js
// ==UserSubscribe==
// @name         Web Development Toolkit
// @name:zh-CN   Web开发工具包
// @description  Essential scripts for web developers
// @description:zh-CN  Web开发者必备脚本集合
// @version      1.2.0
// @author       DevTools Team
// @homepageURL  https://github.com/devtools/web-toolkit
// @supportURL   https://github.com/devtools/web-toolkit/issues
// @updateURL    https://raw.githubusercontent.com/devtools/web-toolkit/main/subscription.meta.js
// @connect      api.github.com
// @connect      cdn.jsdelivr.net
// @connect      unpkg.com
// @scriptUrl    https://raw.githubusercontent.com/devtools/web-toolkit/main/scripts/console-enhancer.user.js
// @scriptUrl    https://raw.githubusercontent.com/devtools/web-toolkit/main/scripts/network-monitor.user.js
// @scriptUrl    https://raw.githubusercontent.com/devtools/web-toolkit/main/scripts/performance-analyzer.user.js
// @scriptUrl    https://raw.githubusercontent.com/devtools/web-toolkit/main/scripts/accessibility-checker.user.js
// ==/UserSubscribe==

// This subscription provides a collection of web development tools:
// 1. Console Enhancer - Improves browser console functionality
// 2. Network Monitor - Tracks network requests and performance
// 3. Performance Analyzer - Analyzes page performance metrics
// 4. Accessibility Checker - Validates accessibility compliance
//
// All scripts are maintained by the DevTools Team and regularly updated
// for compatibility with modern browsers and web standards.
```

## Security Considerations

### 1. Trust Verification
- Only subscribe to sources you trust
- Verify the author's reputation
- Check the subscription's homepage and support links

### 2. Permission Review
- Review `connect` permissions carefully
- Understand what domains scripts can access
- Be cautious with wildcard permissions (`*`)

### 3. Script Auditing
- Periodically review scripts installed by subscriptions
- Check for unexpected or suspicious scripts
- Monitor script behavior and permissions

### 4. Update Monitoring
- Pay attention to subscription update notifications
- Review changes when subscriptions update
- Unsubscribe if you notice suspicious activity

## Troubleshooting

### Common Issues

1. **Subscription Not Updating**
   - Check if `version` is properly set
   - Verify update URL is accessible
   - Check update interval settings

2. **Scripts Not Installing**
   - Verify script URLs are accessible
   - Check for HTTPS requirement
   - Review error logs in browser console

3. **Permission Errors**
   - Ensure `connect` permissions cover all script needs
   - Check for conflicting permissions
   - Verify domain accessibility

### Debugging

- Use browser developer tools to monitor network requests
- Check ScriptCat logs for error messages
- Test individual script URLs manually
- Verify subscription file syntax

The subscription system provides a powerful way to manage collections of related scripts while maintaining security and user control.
