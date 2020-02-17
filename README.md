# Ski Tracker Application

This application will allow a user to document their days of skiing.

## Basic General Description for App

This application will be comprised of a few reusable components that will make the application small and efficient. The goal is to maintain a simple and good looking GUI that will allow the user to easily navigate and or filter through large sets of data. The displayed data will not cause poor page performance (unless the user has skied a ridiculous number of days and decides to view all data at one time... but hey why would a user do what the developer expects?).

Since I do not have access to an external server to store data, this application will require the user to upload and download a JSON file. This file will contain data that the application will display and manage.  
This application will simulate data being retrieved by an API (possibly create a timeout for a random short period of time). Doing this will allow for a more seamless implementation for API calls if implemented in the future. This "data retrieval" will obviously be held in a service(s).

## Probable Functionality

* Upload JSON file of data
* View/Filter data
* Add new **entry** for a day of Skiing
* Update any **entry**
* Write data to JSON file for user to store on their local machine

### Definition of an Entry

An **entry** will store data for the user's day of skiing. This data will likely be comprised of the following:

* Date (TODO - determine format (ie. dd/MM/yyyy, MM/dd/yyyy, etc))
* Ski Area
  * The user will be able to select ski areas from some kind of list (dropdown? modal? whateva?)
* Description
* Possibly other stats? (ie. vertical, distance skied, etc.)

## Application Directory and File Structure

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
