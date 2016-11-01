# Mashup

## How to get code and contribute
  * In console, `git clone https://github.com/marcusreese/mashup.git`
  * `npm install`
  * `ng serve`
  * In second console, `ng test`
  * In third console, `git status` etc.

## How this is created using Windows 10 etc.

  * Before ng2 cli, need Node.js > 4; got stable (v4.6.0) from nodejs.org
  * Before ng2 cli, need npm > 3: `npm install -g npm@latest` (3.10.8)
  * Before ng2 cli, have to install git from https://git-scm.com/download/
  * Close command prompt and reopen for git to be in path.
  * `npm install -g angular-cli`
  * Create blank repo on github.com by
    * clicking Start a Project,
    * adding a name *mashup* (note SIMPLE name for deploy), and
    * clicking Create Repository.
  * `ng new mashup --style=scss` (note: same name as repo for deploy)
  * `cd mashup`
  * `git remote add origin https://github.com/marcusreese/mashup.git`
  * `git push -u origin master` (the u allows future simple `git pull`)
  * On each commit:
    * `git status`
    * `git add .`
    * `git log -1` (flag is a number--how many commit messages to see)
    * `git commit -m "<message here>"`
    * and eventually `git push -u origin master`
  * `ng github-pages:deploy` worked in seconds; only favicon err logged.
  * `ng serve` works; and then in other console, `ng e2e` works.
  * `ng test` works (debug, ctrl-shift-i to see test results in console)
  * Create semantic header main and footer tags in app.component.html:
    * `<header role="banner"></header>`
    * `<main role="main"></main>`
    * `<footer role="contentinfo"></footer>`
  * Add some styles in styles.scss and app.component.scss.
  * Create /layout/ folder.
  * Generate components (that will be nested inside the semantic tags):
    * `ng g component layout/header`
    * `ng g component layout/main-content`
    * `ng g component layout/footer`
  * Add new tags to app.component.html (e.g. <app-header></app-header>).
    * That breaks unit test: *'app-header' is not a known element.*
    * To fix, copy imports and declarations from app.module.ts,
    * paste in app.component.spec.ts
    * e2e okay, test okay, serve okay, console okay, deploy okay
  * `npm install @ngrx/core @ngrx/store --save`
    * Noticing unmet peer dependencies. Ignoring for now.
  * Create a footer reducer with action for toggling size.
    * `import` and `imports` in app.module.ts and app.component.spec.ts.
    * e2e working; test okay if change footer test to be like app test.
    * Footer test constructor won't work until it gets a store argument.
  * Add footer button that dispatches the TOGGLE_FOOTER_SIZE action.
    * e2e okay, test okay, serve okay, console okay
  * Have footer height respond to state change.
    * e2e okay, test okay, serve okay, console okay, deploy okay
  * `npm install angular2-grid --save`
  * Put angular2-grid in main-content.
    * e2e okay, test okay, serve okay, console okay
  * Make buttons and boxes for Plugins, Map, and Table
    * test okay, serve okay, console okay, deploy okay
  * `npm install --save leaflet`
  * `npm install primeng --save`
  * `ng g component plugins/plugins-manager`
  * `ng g component plugins/map`
  * `ng g component plugins/hlr`
  * Get button clicks to toggle isWindowVisible/isBoxVisible.
    * test okay, serve okay, console okay
  * `npm install --save ramda`
  * Get windows/boxes to appear/disappear based on isBoxVisible.
    * test okay, serve okay, console okay, deploy okay
  * Get plugin components into main-content and change title.
    * e2e okay, test okay, serve okay, console okay
  * Fix header css etc.
    * test okay, serve okay, console okay
  * Try to add primeng but fail: angular/issues/4974 primeng/issues/732
    * `git stash -u`
    * `git checkout -b primengAttempt`
    * `git stash pop`
    * `git add .`
    * `git commit -m "Effort to use primeng"`
    * `git push origin primengAttempt` (for backup)
    * `git checkout master`
  * Clean up boxes/plugins
    * `npm install --save @types/ramda`
    * test okay, serve okay, console okay
    * tried referencing script in angular-cli.json,
      * nice in console,
      * worked in code with no import, but
      * gave ugly *cannot find name* errors, so left out for now.
      * as workaround, use console on ramda's website.
  * `npm install express --save`
  * `npm install request --save`
  * Create ip addr input and add/x button.
    * Some tests broken.
  * Add plugin-form component; fix some tests.
    * Just noticed angular2-grid behavior is broken.
      * After any resize; height always snaps to 1.
      * No longer floating up after drag.
  * Fix some css on plugin-form. Windowing still buggy.
  * Create new plugin on submit. It adds button.
    * Make footer button-click show/hide box.
    * Add new stuff top left.
    * Tests still failing.
    * Box resize still buggy.
    * serve and console okay.
  * Improve forms, footer, and tests
    * Can handle many buttons
    * Form now has select and x but not functional
    * test okay(!), serve okay, console okay
    * Box resize still buggy
  * Insert first iframe (map)
    * test okay, serve okay, console okay
  * Correct grid-item scrolling
    * test okay, serve okay, console okay
  * Create app-frame component
    * test okay, serve okay, console okay
  * Input URL and name to box and button
    * test okay, serve okay, console okay
  * Send url as input to app-frame
    * test okay, serve okay, console okay
  * Set up a Node.js Express server
    * In mashup so there's just one git repo.
    * iframe works with http://localhost:8181
    * test okay, serve okay, console okay
  * Create combo-a plugin/widget
    * cd src/app/plugins
    * `ng g component combo-a`
    * test okay, serve okay, console okay
  * Fix form dropdowns and non-url titles
    * test okay, serve okay, console okay
  * Get combo-a box to display app-combo-a component
    * test okay, serve okay, console okay
  * Get app-combo-a to display a line for each bsr
    * test okay, serve okay, console okay
  * Get app-combo-a to display an on/off for each bsr
    * test okay, serve okay (except case warning), console okay
  * Set up socket.io
    * I'd rather use express-ws but it's not well documented.
    * `npm install socket.io --save`
    * `npm install socket.io-client --save`
    * Nothing else yet.
    * test okay, serve okay, console okay
    
    
  * Create ng service
    * test okay, serve okay, console okay
  * Or proxy request through each second? for how many?
  Have to make that call from node anyway: 
    * test okay, serve okay, console okay
    
  * Get app-combo-a to display live rf status for each bsr
    * test okay, serve okay, console okay
  * Get app-combo-a to control rf status for each bsr
    * test okay, serve okay, console okay

    


  *  and create src/server/ folder.
  * Next: add leaflet
  * Next: add form and api for getting web pages with lat and long for table and map
  * material design?
  
  /feed.kpp?status
  {
  "status": {
  "isWarmupComplete": true,
  "LicenseStatus": "Unknown",
  "SupportedModes": [
  "CDMA",
  "GSM",
  "UMTS",
  "LTE",
  "LTE_TDD",
  "EVDO",
  "WiMax",
  "FixedWiMax"
  ],
  "SystemType": "Nebula2C",
  "SystemSlot": 0,
  "ActiveVersionName": "Standalone",
  "state": "ActiveMode",
  "FromMode": null,
  "ToMode": null,
  "GuiMode": "EVDO",
  "CellularStandard": "EVDO"
  },
  "feedstamps": {
  "status": 54
  }
  }
  http://buff2:13003/feed.kpp?evdo_status
{
"evdo_status": {
"hlrSize": 0,
"hlrReady": false,
"hlrRequestsOutstanding": false,
"paramsReady": true,
"Band": "850MHz",
"Channel": 0,
"PNOffset": 0,
"CountryCode": "000",
"SectorID": "00000000000000000000000000000000",
"SubnetMask": 0,
"ColorCode": 0,
"Status": "Running"
},
"feedstamps": {
"evdo_status": 37
}
}

## Documentation of concept decisions

if url, frame? yes, because url is generic, dangerous
if bsr, may be able to do ng2 component
an aggregate app uses all urls, not just one
bsrs etc may serve as aggregate (e.g. mapping)
both front and proxy need plugin architecture
aggregate plugins have front and proxy sides
aggregate plugins have apis
  e.g.,
    here's how you tell me your rf state (or lat-long)
    here's how I tell you your rf needs to toggle
adapter plugins join e.g. bsr to map or bsr to rf
i.e. it joins a source app to an aggregate app/plugin
adapter plugins can be front or (usually) proxy


## Stuff from ng2 is below

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
