---
id: cloudcat
---

# Cloud Execution

> Provides multiple cloud execution methods. For details, see [Runtime Environment](#runtime-environment). Additionally, [CloudCat](https://github.com/scriptscat/cloudcat) is a service for cloud execution of background scripts, a FAAS platform currently under development.

⚠️ Please note ⚠️: After uploading to the cloud, the `once` semantic in scheduled script expressions will change, replacing the time before `once` with the minimum value for execution.

Examples:

* `* * once * *` => `0 0 * * *` Run once daily → Run at 00:00 daily
* `* 1-23 once * *` => `0 1 * * *` Run once between 1-23 hours daily → Run at 01:00 daily
* `* 1,3,5 once * *` => `0 1 * * *` Run once at 1, 3, or 5 o'clock daily → Run at 01:00 daily
* `* */4 once * *` => `0 0 * * *` Run once every 4 hours daily → Run at 00:00 daily
* `* 1-23/4 once * *` => `0 1 * * *` Run once every 4 hours between 1-23 hours daily → Run at 01:00 daily
* `* 10 once * *` => `0 10 * * *` Run once at 10 o'clock daily → Run at 10:00 daily
* `* * * once *` => `0 0 1 * *` Run once monthly → Run at 00:00 on the 1st of each month

## CloudCat Additional Metadata

Reference script: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Declares that this script can run using `CloudCat` method. When a script has this option, a cloud execution button will appear in the script list. Clicking it allows you to select the execution method. For execution methods, see [Runtime Environment](#runtime-environment).

![CloudCat Button](./cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Related to cloudcat, not yet implemented

Default CloudCat server address

### exportValue

Describes values to export to the cloud. Multiple descriptions can exist.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Describes cookies to export to the cloud. Multiple descriptions can exist. Parameters use `GM_cookie`'s `CookieDetails` format, for example:

```js
// @exportCookie domain=.example.com,name=sessionId
// @exportCookie domain=.api.example.com,name=authToken
// @exportCookie url=https://example.com,name=userPrefs
```

## Runtime Environment

CloudCat supports multiple runtime environments for different use cases:

### 1. GitHub Actions

Execute scripts using GitHub Actions infrastructure.

**Advantages:**
- Free tier available
- Reliable infrastructure
- Good for scheduled tasks
- Version control integration

**Limitations:**
- Execution time limits
- Limited to public repositories (for free tier)
- Cold start delays

**Setup:**
1. Create a GitHub repository
2. Configure GitHub Actions workflow
3. Upload script with CloudCat metadata
4. Configure secrets for sensitive data

### 2. Serverless Functions

Execute scripts on serverless platforms (AWS Lambda, Vercel, etc.).

**Advantages:**
- Pay-per-execution
- Automatic scaling
- No server management
- Fast cold starts

**Limitations:**
- Platform-specific limitations
- Timeout restrictions
- Memory constraints

### 3. CloudCat Service

Use the dedicated CloudCat FAAS platform (under development).

**Advantages:**
- Optimized for userscripts
- Built-in GM API support
- Easy deployment
- Script-specific features

**Limitations:**
- Still in development
- Limited availability

## Cloud Script Example

```js
// ==UserScript==
// @name         Cloud Auto Check-in
// @namespace    https://scriptcat.org/
// @version      1.0.0
// @description  Automatically check in to various services
// @author       You
// @crontab      0 9 * * *
// @cloudCat
// @exportValue  username,password
// @exportCookie domain=.example.com,name=sessionId
// @exportCookie domain=.api.example.com,name=authToken
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_cookie
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
    
    async function performCheckin() {
        try {
            // Get exported values
            const username = GM_getValue('username');
            const password = GM_getValue('password');
            
            if (!username || !password) {
                console.error('Missing credentials');
                return;
            }
            
            // Perform check-in request
            const response = await GM.xmlHttpRequest({
                method: 'POST',
                url: 'https://api.example.com/checkin',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            
            if (response.status === 200) {
                const result = JSON.parse(response.responseText);
                console.log('Check-in successful:', result);
                
                // Send notification
                GM_notification({
                    title: 'Check-in Successful',
                    text: `Earned ${result.points} points`,
                    timeout: 5000
                });
            } else {
                throw new Error(`Check-in failed: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Check-in error:', error);
            
            GM_notification({
                title: 'Check-in Failed',
                text: error.message,
                timeout: 5000
            });
        }
    }
    
    // Execute check-in
    performCheckin();
})();
```

## Data Export and Import

### Exporting Values

Use `@exportValue` to specify which stored values should be available in the cloud:

```js
// @exportValue apiKey,refreshToken,userSettings
```

These values will be automatically synchronized from your local ScriptCat to the cloud environment.

### Exporting Cookies

Use `@exportCookie` to specify which cookies should be available in the cloud:

```js
// @exportCookie domain=.example.com,name=sessionId
// @exportCookie url=https://api.example.com,name=authToken
```

Cookie export supports the same parameters as `GM_cookie`:
- `domain` - Cookie domain
- `name` - Cookie name
- `url` - Specific URL
- `path` - Cookie path

### Security Considerations

**Data Encryption:**
- All exported data is encrypted before transmission
- Use strong encryption keys
- Regularly rotate sensitive credentials

**Access Control:**
- Limit cloud execution permissions
- Use environment-specific credentials
- Monitor execution logs

**Best Practices:**
- Don't export unnecessary sensitive data
- Use token-based authentication when possible
- Implement proper error handling
- Log security events

## Deployment Workflow

### 1. Local Development
- Develop and test script locally
- Add CloudCat metadata
- Configure export values and cookies

### 2. Cloud Configuration
- Set up cloud runtime environment
- Configure environment variables
- Set up monitoring and logging

### 3. Deployment
- Upload script to cloud platform
- Verify exported data synchronization
- Test cloud execution

### 4. Monitoring
- Monitor execution logs
- Set up alerts for failures
- Track performance metrics

## Troubleshooting

### Common Issues

1. **Export Data Not Available**
   - Verify `@exportValue` and `@exportCookie` declarations
   - Check data synchronization status
   - Ensure proper permissions

2. **Execution Failures**
   - Check cloud platform logs
   - Verify network connectivity
   - Review timeout settings

3. **Authentication Errors**
   - Verify exported cookies are valid
   - Check token expiration
   - Update credentials if needed

### Debugging

- Use console logging for cloud execution
- Monitor network requests
- Check cloud platform metrics
- Review error notifications

### Performance Optimization

- Minimize exported data size
- Use efficient API calls
- Implement proper caching
- Optimize execution time

## Future Developments

The CloudCat platform is actively being developed with planned features:

- **Enhanced Runtime Support** - More cloud platforms
- **Better Debugging Tools** - Cloud-specific debugging
- **Improved Security** - Advanced encryption and access control
- **Performance Monitoring** - Detailed execution analytics
- **Cost Optimization** - Intelligent resource management

For the latest updates and documentation, visit the [CloudCat GitHub repository](https://github.com/scriptscat/cloudcat).
