# Components

Each component in this directory is a **global** component used for the application.  
An example component that belongs in this direcotry is the `nav-bar` component.

**NOTE** - If you are attempting to implement a component that is used for a **specific functionality PLEASE DO NOT USE THIS DIRECTORY!!**  
If this is the case place the component's directory and files in the directory `/modules`

## Component Structure

* HTML file
  * Contains the template for the component
  * This can be omitted if the template is simple enough for an inline template
* JS file
  * Contains the logic for this component
* SCSS file
  * Contains any custom styling this component needs
  * This file can be omitted if no custom styling is needed

Each file of these files are to be denoted as:

* `componentName.component.html`
* `componentName.component.js`
* `componentName.component.scssl`