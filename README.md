# Rails Page Navigator

Search any path on Rails to assist in access

# Installation

## Change settings for your environment
Modify `src/common/const.ts`

## Build
```bash
npm install
npm run build
```

## Load to Google Chrome
See [official document](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)

# Usage

1. Click on the extension's icon or press `Ctrl + Shift + h` to launch the extension
2. Enter keywords and select the URL you want to access
3. If the URL contains a parameter, enter the value of the parameter
4. Click on the link at the bottom

# Advance
## Change the shortcut key
Modify `public/manifest.json`

See [official document](https://developer.chrome.com/docs/extensions/reference/commands/) for details

## Improve search
Modify `src/Popup/Select/enhance.ts`

This project uses Fuse.js

See [official site](https://www.fusejs.io/) for details

# License
 [MIT license](https://en.wikipedia.org/wiki/MIT_License)
