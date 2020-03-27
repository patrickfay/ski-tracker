# Views

This directory holds different views for the app. Each view must be registered in the app router (`app.router.js`).

## View Dir Structure

Each view will contain 3 files:

* HTML file
  * Contains the template for the view
  * This can be omitted if the template is simple enough for an inline template
* JS file
  * Contains the logic for this view and will be a **controller**
* SCSS file
  * Contains any custom styling this component needs
  * This file can be omitted if no custom styling is needed

These files are intended to be simple and small. Most logic will be contained within components and directives that these views use.