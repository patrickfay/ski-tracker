# Views

This directory will hold the different views for this app. The views will be:

* Home Page
* Entries page (holding all ski day entries for the user)
* About page

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

**NOTE** - These views should be simple and short files. These components will be comprised of different modules, which will hold more complex and reusable components.
