---
title: Develop Scripts with the VSCode Extension
---

# Develop Scripts with VSCode

ScriptCat provides a VSCode extension that lets you write user scripts in VSCode. After saving, changes are automatically synced to ScriptCat in the browser — no manual copy-pasting required, greatly improving development efficiency.

## Prerequisites

You need to install the following two tools:

1. **Install the ScriptCat extension in your browser** — If you haven't installed it yet, follow the [Quick Start](/docs/use/use/) guide to install it
2. **Install the ScriptCat extension in VSCode** — Search for "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" in the VSCode Extensions marketplace, or download it from the [GitHub repository](https://github.com/scriptscat/scriptcat-vscode)

## Establish a Connection

Once installed, you need to connect the ScriptCat extension in your browser with VSCode:

1. Click the ScriptCat icon in your browser to open the management panel
2. Go to **Tools > Developer Tools**
3. Find **Auto-connect to VSCode service**, enable it, and click **Connect**

Once connected, a real-time channel is established between VSCode and ScriptCat.

## Sync Scripts

After the connection is established, you can choose one of two ways to sync scripts:

### Option 1: Auto-detect Mode (Recommended)

1. In VSCode, press `Ctrl + Shift + P` (`Cmd + Shift + P` on Mac) to open the command palette
2. Type and select `scriptcat.autoTarget`
3. From then on, every time you open or save a `.user.js` file, it will be automatically synced to ScriptCat

### Option 2: Specified Script Mode

1. In VSCode, press `Ctrl + Shift + P` (`Cmd + Shift + P` on Mac) to open the command palette
2. Type and select `scriptcat.target`
3. Specify the path of the script file to sync

## Development Workflow

Once set up, the development workflow is very simple:

1. Write or edit your `.user.js` script in VSCode
2. Press `Ctrl + S` to save the file
3. The script is automatically synced to ScriptCat in the browser
4. Switch to the browser and refresh the page to see the result

The entire process requires no manual steps — saving takes effect immediately.

## FAQ

### What if it won't connect?

- Make sure the ScriptCat extension in your browser is running
- Make sure the ScriptCat extension in VSCode is installed and enabled
- Check the connection status on the "Developer Tools" page in the ScriptCat management panel

### The script isn't updated after saving?

- Make sure the file name ends with `.user.js`
- Make sure you have run the `scriptcat.autoTarget` or `scriptcat.target` command
- Check the VSCode output panel for any error messages

### Do I need to reconnect after restarting VSCode?

If "Auto-connect to VSCode service" is enabled, VSCode will automatically reconnect after a restart — no manual steps required.
