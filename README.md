# Ski Tracker Application

This is an AngularJS (v1.7.5) application that allows a user to document their days of skiing.

This README has sections on the following:

* General Description
* Application Functionality
* Application Directory & File Structure
* Gulp Commands

## General Description

This application is comprised of a few reusable components that makes the application small and efficient. The goal is to maintain a simple and good looking GUI that allows the user to easily navigate and or filter through large sets of data. The displayed data will not cause poor page performance (unless the user has skied a ridiculous number of days and decides to view all data at one time... but hey why would a user do what the developer expects?).

Since there is not any access to an external server to store data, this application requires the user to upload and download a JSON file. That file contains data that the application displays and manages.

## Application Functionality

See the main functionality for this application below:

* Upload JSON file of data
* View/Filter data
* Features for an **entry** - *(see definition of an entry in the section titled 'Definition of an Entry')*
  * Add new **entry** for a day of Skiing
  * Update any **entry**
  * Delete any **entry**
* Write data to JSON file for user to store on their local machine

### Definition of an Entry

An **entry** represents one day of skiing for the user and stores the following data on the user's day:

* Date
  * Use's uib-datepicker (and consiquently a JS Date obj) to allow user to select a date in the past. Default value is be curr date
* Ski Area
  * The user is able to select ski areas from a list
  * A Ski Area object also contains other info about the ski area (state, etc.)
* Who the user skied with (if anyone)
  * Maintain people the user skied with. Each person is stored and be selectable for the user and the user can also be able to add a new 'person' they skied with.
* Stats from their day
  * Vertical, distance skied, top speed, highest/lowest altitude
* Description
  * A descritption is a string and hold the user's description for their day. Depending on the user this description can be different (what happened in that day, snow conditions, etc.)

**NOTE** - To find the object model for an entry, please see (dir location (likely to be within `./services`))

## Application Directory & File Structure

Please look over the directory and file structe of this application to gain a sense of how this applicaiton is being built and how to add to it.

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
| + views                           Components used as views
| | + componentB
| | | componentB.component.html
| | | componentB.component.js
| | | componentB.component.scss
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

## Gulp Commands

This application uses a gulp file for devlopment and building the applicaiton.  
There are **two** main gulp tasks you can run from the terminal. You will need to enter these commands from the root directory of this applicaiton.

This application will be hosted on [localhost:3001](http://localhost:3001)

For **development**, run the command **`gulp dev`** from the root directory of this application.  
This command will watch for changes to all files and will perform the appropriate actions to rebuild/reload the browser for the developer.

For **building** the application, run the command **`gulp build`** from the root directory of this application.  
**NOTE** - this gulp task has **NOT** been implemented yet.