---
id: config
---

# User Configuration

Content in `==UserConfig==` should be placed after `==UserScript==` and represents user configuration options for the script. Configuration descriptions are written in [YAML](https://yaml.org/) format:

```js
/* ==UserConfig==
group1:
  configA:                                # Key is group.config, e.g., this key is: group1.configA
    title: Configuration A                # Configuration title
    description: This is a text type configuration  # Configuration description
    type: text                            # Option type, auto-detected from data if not specified
    default: Default value                # Default value for the configuration
    min: 2                                # Minimum 2 characters for text
    max: 18                               # Maximum 18 characters for text
    password: true                        # Set as password field
  configB:
    title: Configuration B
    description: This is a checkbox configuration
    type: checkbox
    default: true
  configC:
    title: Configuration C
    description: This is a select list configuration
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Configuration D
    description: This is a dynamic select list configuration
    type: select
    bind: $cookies                       # Dynamically display bound values, value starts with $, must be an array
  configE:
    title: Configuration E
    description: This is a multi-select list configuration
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Configuration F
    description: This is a dynamic multi-select list configuration
    type: mult-select
    bind: $cookies
  configG:
    title: Configuration G
    description: This is a number configuration
    type: number
    default: 10
    min: 1
    max: 100
  configH:
    title: Configuration H
    description: This is a textarea configuration
    type: textarea
    default: "Multi-line\ntext content"
    rows: 5
group2:
  configI:
    title: Configuration I
    description: This is a color picker configuration
    type: color
    default: "#ff0000"
  configJ:
    title: Configuration J
    description: This is a file input configuration
    type: file
    accept: ".txt,.json"
==/UserConfig== */
```

## Configuration Types

### text
Text input field with optional validation.

**Properties:**
- `min`: Minimum character length
- `max`: Maximum character length
- `password`: Set to `true` for password fields
- `placeholder`: Placeholder text

```yaml
apiKey:
  title: API Key
  description: Enter your API key
  type: text
  password: true
  min: 10
  max: 50
  placeholder: "Enter API key here"
```

### number
Numeric input with optional range validation.

**Properties:**
- `min`: Minimum value
- `max`: Maximum value
- `step`: Step increment

```yaml
refreshInterval:
  title: Refresh Interval
  description: Refresh interval in seconds
  type: number
  default: 30
  min: 5
  max: 300
  step: 5
```

### checkbox
Boolean checkbox input.

```yaml
enableFeature:
  title: Enable Feature
  description: Enable this feature
  type: checkbox
  default: true
```

### select
Single selection dropdown.

**Properties:**
- `values`: Array of available options
- `bind`: Dynamic binding to a variable (starts with $)

```yaml
theme:
  title: Theme
  description: Select theme
  type: select
  default: "light"
  values: ["light", "dark", "auto"]
```

### mult-select
Multiple selection list.

**Properties:**
- `values`: Array of available options
- `bind`: Dynamic binding to a variable (starts with $)

```yaml
enabledFeatures:
  title: Enabled Features
  description: Select features to enable
  type: mult-select
  default: ["feature1"]
  values: ["feature1", "feature2", "feature3"]
```

### textarea
Multi-line text input.

**Properties:**
- `rows`: Number of visible rows
- `cols`: Number of visible columns

```yaml
customScript:
  title: Custom Script
  description: Enter custom JavaScript code
  type: textarea
  rows: 10
  default: "// Your code here"
```

### color
Color picker input.

```yaml
accentColor:
  title: Accent Color
  description: Choose accent color
  type: color
  default: "#007bff"
```

### file
File input for uploading files.

**Properties:**
- `accept`: Accepted file types
- `multiple`: Allow multiple files

```yaml
configFile:
  title: Configuration File
  description: Upload configuration file
  type: file
  accept: ".json,.yaml,.yml"
```

## Dynamic Binding

You can bind configuration options to dynamic values using the `bind` property. The bound variable must start with `$` and should be an array.

```javascript
// In your script, set the dynamic values
GM_setValue("$cookies", ["cookie1", "cookie2", "cookie3"]);
```

```yaml
selectedCookies:
  title: Select Cookies
  description: Choose cookies to monitor
  type: mult-select
  bind: $cookies
```

## Accessing Configuration Values

Use `GM_getValue` to access configuration values in your script:

```javascript
// Get single configuration value
const apiKey = GM_getValue("group1.configA", "default_value");

// Get checkbox value
const isEnabled = GM_getValue("group1.configB", false);

// Get select value
const selectedOption = GM_getValue("group1.configC", 1);

// Get multi-select values
const selectedItems = GM_getValue("group1.configE", []);
```

## Setting Configuration Values

Use `GM_setValue` to programmatically set configuration values:

```javascript
// Set text value
GM_setValue("group1.configA", "new_value");

// Set checkbox value
GM_setValue("group1.configB", true);

// Set select value
GM_setValue("group1.configC", 3);

// Set multi-select values
GM_setValue("group1.configE", [1, 3, 5]);
```

## Configuration Groups

Organize related configurations into groups for better user experience:

```yaml
appearance:
  theme:
    title: Theme
    type: select
    values: ["light", "dark"]
  fontSize:
    title: Font Size
    type: number
    min: 12
    max: 24

behavior:
  autoRefresh:
    title: Auto Refresh
    type: checkbox
    default: true
  refreshInterval:
    title: Refresh Interval
    type: number
    default: 60
```

## Best Practices

### 1. Meaningful Names
Use descriptive names for configuration keys and groups:

```yaml
# Good
userInterface:
  showNotifications:
    title: Show Notifications
    
# Avoid
ui:
  notif:
    title: Notif
```

### 2. Provide Descriptions
Always include helpful descriptions:

```yaml
apiTimeout:
  title: API Timeout
  description: Maximum time to wait for API responses (in seconds)
  type: number
  default: 30
```

### 3. Set Reasonable Defaults
Provide sensible default values:

```yaml
maxRetries:
  title: Maximum Retries
  description: Number of times to retry failed requests
  type: number
  default: 3
  min: 0
  max: 10
```

### 4. Use Validation
Set appropriate constraints:

```yaml
username:
  title: Username
  description: Your username (3-20 characters)
  type: text
  min: 3
  max: 20
```

### 5. Group Related Options
Organize configurations logically:

```yaml
network:
  timeout:
    title: Timeout
    type: number
  retries:
    title: Retries
    type: number
    
display:
  theme:
    title: Theme
    type: select
  fontSize:
    title: Font Size
    type: number
```

## Example Complete Configuration

```javascript
// ==UserScript==
// @name         Example Script with Configuration
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Example script demonstrating user configuration
// @author       You
// @match        https://example.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

/* ==UserConfig==
general:
  enabled:
    title: Enable Script
    description: Enable or disable the script functionality
    type: checkbox
    default: true
  
  apiKey:
    title: API Key
    description: Your API key for external services
    type: text
    password: true
    min: 10
    
appearance:
  theme:
    title: Theme
    description: Choose the visual theme
    type: select
    default: "auto"
    values: ["light", "dark", "auto"]
    
  accentColor:
    title: Accent Color
    description: Choose the accent color
    type: color
    default: "#007bff"
    
behavior:
  autoRefresh:
    title: Auto Refresh
    description: Automatically refresh data
    type: checkbox
    default: false
    
  refreshInterval:
    title: Refresh Interval
    description: How often to refresh data (in seconds)
    type: number
    default: 60
    min: 10
    max: 3600
==/UserConfig== */

(function() {
    'use strict';
    
    // Load configuration
    const config = {
        enabled: GM_getValue("general.enabled", true),
        apiKey: GM_getValue("general.apiKey", ""),
        theme: GM_getValue("appearance.theme", "auto"),
        accentColor: GM_getValue("appearance.accentColor", "#007bff"),
        autoRefresh: GM_getValue("behavior.autoRefresh", false),
        refreshInterval: GM_getValue("behavior.refreshInterval", 60)
    };
    
    // Use configuration
    if (!config.enabled) {
        console.log("Script is disabled");
        return;
    }
    
    console.log("Script running with theme:", config.theme);
    
    if (config.autoRefresh) {
        setInterval(() => {
            console.log("Auto refreshing...");
        }, config.refreshInterval * 1000);
    }
})();
```

This configuration system provides a user-friendly way to customize script behavior without modifying the code directly.
