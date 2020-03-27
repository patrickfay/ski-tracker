# Ski Tracker Application

This is an AngularJS (v1.7.5) application that allows a user to document their days of skiing.

This README has sections on the following:

* General Description
* Application Data
* Application Functionality
* Application Directory & File Structure
* Gulp Commands

## General Description

This application is comprised of a few reusable components that makes the application small and efficient. The goal is to maintain a simple and good looking GUI that allows the user to easily navigate and or filter through large sets of data (we also want the applicaiton to be scalable, readable, and easily navigatable for any developer working on it in the future). Since there is a possibility for the user to have a very large set of data for their ski season, the application only gets and displays data the user wants to view (ie. there must be a click on an entry to view all data the entry object contains). Therefore the displayed data does not cause poor page performance  (unless the user has skied a ridiculous number of days and decides to view all data at one time... but hey why would a user do what the developer expects?).

## Application Data

Since there is not any access to an external server to store data, this application requires the user to upload and download a JSON file. That file contains data that the application displays and manages.

All user data is be stored within the service `userDataService`. This data **can** be manipulated by the user through the application's interface.

All ski area data is stored within the service `skiAreaService`. This data **cannot** be manipulated by the user. If you (the developer) want to update ski area data, add to it, or remove some of it you must manually update this data within `./app/sevices/ski-area/skiArea.service.js`.

## Application Functionality

Main functionality for this application:

* Upload JSON file of entry data
* Features for an **entry**
  * Add new **entry** for a day of Skiing
  * Update any **entry**
  * Delete any **entry**
* View/Filter entry data
* Write entry data to JSON file for user to store on their local machine

For a description of an **entry** object and to see it's object model, please refer to the `userDataService` README (`./app/services/user-data`).

## Application Directory & File Structure

Please look over the directory and file structe of this application to gain a sense of how this applicaiton is built and how to add to it.

```text
+ app
| + components                      App Global Components (nav bar, etc.)
| | + componentA
| | | componentA.component.html
| | | componentA.component.js
| | | componentA.component.scss
| | `
| | + ...
| | |
| | components.module.js            All components module definition
| | components.scss                 SCSS wrapper for all components styles
| `
| + directives                      App Global Directives (custom dropdowns, etc.)
| | + directiveA
| | | directiveA.directive.html
| | | directiveA.directive.js
| | | directiveA.directive.scss
| | `
| | + ...
| | |
| | directives.module.js            All directives module definition
| | directives.scss                 SCSS wrapper for all directives styles
| `
| |
| + modules                         App Modules
| | + moduleA
| | | + components                  Components of the module
| | | + services                    Services of the module
| | | moduleA.module.js             Module definition for the module
| | | moduleA.scss                  SCSS styles for the module
| | `
| | + ...
| | |
| | modules.module.js               Module definition for all modules
| | modules.scss                    SCSS wrapper for all modules
| `
| |
| + services                        Services for the global App module
| |
| + theme                           SCSS global style rules
| |
| + views                           Views utilize a controller, a template, and SASS styling file
| | + viewA
| | | viewA.html
| | | viewA.controller.js
| | | viewA.scss
| | `
| | + ...
| | |
| | views.module.js                 All views module definition
| | views.scss                      SCSS wrapper for all views styles
| `
| |
| app.module.js                     AngularJS modules entry point. Used to build app.
| app.router.js                     Route definition for global App
| app.style.scss                    Wraps all app SCSS styles (components, modules, theme, views)
| index.html                        html entry point
`
```

**NOTE** - All major directories within this applicaiton contain two files, `dirName.module.js` and `dirName.scss`. If you are generating a new component, directive, service, or whatever within these major directories you are only required to register your newly generated files within the two mentioned files!!

## Gulp Commands

This application uses a gulp file for development and building the applicaiton.  
There are **two** main gulp tasks you can run from the terminal. You will need to enter these commands from the root directory of this applicaiton.

This application will be hosted on [localhost:3001](http://localhost:3001)

For **development**, run the command **`gulp dev`** from the root directory of this application.  
This command will watch for changes to all files and will perform the appropriate actions to rebuild/reload the browser for the developer.

For **building** the application, run the command **`gulp build`** from the root directory of this application.  
**NOTE** - this gulp task has **NOT** been implemented yet.