# Views

This directory holds different views for the app.

## View structure

Each view will contain 3 files:

* HTML file
  * Contains the template for the component
  * This can be omitted if the template is simple enough for an inline template
* JS file
  * Contains the logic for this view and will be a **controller**
* SCSS file
  * Contains any custom styling this component needs
  * This file can be omitted if no custom styling is needed

These views will be comprised of different modules and components, which will hold more complex and reusable components.