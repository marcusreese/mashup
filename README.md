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
  * Next: make form better


  *  and create src/server/ folder.
  * Next: add leaflet
  * Next: add form and api for getting web pages with lat and long for table and map
  * material design?




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
