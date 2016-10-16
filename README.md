# Mashup

## How this is created using Windows 10 etc.

  * Before ng2 cli, need Node.js > 4; got stable (v4.6.0) from nodejs.org
  * Before ng2 cli, need npm > 3: `npm install -g npm@latest` (3.10.8)
  * Before ng2 cli, have to install git from https://git-scm.com/download/
  * Close command prompt and reopen for git to be in path
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
    * `git log -1` (the flag is a number--how many commit messages to see)
    * `git commit -m "<message here>"`
    * and eventually `git push -u origin master`
  * `ng github-pages:deploy` worked in seconds; only favicon err logged.
  * `ng serve` works; and then in other console, `ng e2e` works.
  * `ng test` works (debug, ctrl-shift-i to see test results in console)
  * Create header main and footer tags in app.component.html
    * `<header role="banner"></header>`
    * `<main role="main"></main>`
    * `<footer role="contentinfo"></footer>`
  * Add some styles in styles.scss and app.component.scss
  * Create /layout/ folder.
  * Generate components to go in these tags
    * `ng g component layout/header`
    * `ng g component layout/main-content`
    * `ng g component layout/footer`
  * Copy imports those 3 imports from app.module.ts to app.component.ts.
  * Add new tags to app.component.html (e.g. <app-header></app-header>)
    * That breaks unit test: 'app-header' is not a known element.
    * To fix, copy imports and declarations from app.module.ts
    * and paste in app.component.spec.ts
    * and for now, live with "Unused import" warnings?
    * ng e2e works.
    * was also able to re-deploy
  * `npm install @ngrx/core @ngrx/store --save`
  * Noticing unmet peer dependencies. Ignoring for now.
  
    
  
  
  

  
  
  * `npm install express --save` and create src/server/ folder. Still can `ng serve`.

  * Added title to top through stateStore.static, css to top middle and bottom; no test or console errors.
  * Next: make arrow do something
  * Next: try gridster
  * Next: add leaflet
  * Next: add primeng table
  * Next: add form and api for getting web pages with lat and long for table and map
  



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
