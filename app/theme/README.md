# Theme

This directory holds SASS files that contain all app global custom style rules.

All style rules within this directory are wrapped in the file **`theme.scss`**.  
All style rules within `theme.scss` will come before any view's or component's specific styling. You can see this structure in `app.style.scss`.

**NOTE** - The files within this directory are used 'globally' within this application. If you are looking for styling for a specific component, look within that specific components directory.

## Theme Dir Structure

```text
+ theme
| + components          UI components
| | _buttons.scss       style for buttons
| | _inputs.scss        style for input fields
| | ...
|
| + mixins              reusable style rules
| | _buttons.scss       mixins for defining buttons
| | _headers.scss       mixins for defining style for page headers
| | ...
|
| _variables.scss       variables needed for all sass files
| _utilities.scss       utility functions needed across sass files
| _global.scss          rules for base DOM eles (<a>, <p>, etc.)
| theme.scss            wraps all sass rules in this directory
```

**NOTE** - All sass file names begin with an underscore (`_`) except for `theme.scss`. This is to place emphasis on the fact that **only** the style rules in `theme.scss` are interpreted into css that's used by this application. Please ensure to add imports to this file when generating new sass files in this directory.