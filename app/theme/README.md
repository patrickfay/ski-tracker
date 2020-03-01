# Theme

This directory holds SASS files that will contain all custom styling rules for this application.

All styling rules within this directory will be wrapped in the file **`theme.scss`**. This file will be interpreted to css and stored in the dist directory.

**NOTE** - The files within this directory are used 'globally' within this application. If you are looking for styling for a specific component, look within that specific components directory.

## Theme Dir Structure

```text
+ theme
| + components          UI components
| | _buttons.scss       style for buttons
| | _panels.scss
| | ...
|
| + mixins              reusable style rules
| | _buttons.scss       mixins for defining buttons
| | _spacing.scss       mixins for defining space around DOM eles
| | ...
|
| _variables.scss       variables needed for all sass files
| _utilities.scss       utility functions needed across sass files
| _global.scss          rules for base DOM eles (<a>, <p>, etc.)
| theme.scss            wraps all sass rules in this directory
```

**NOTE** - All sass file names begin with an underscore (`_`) except for `theme.scss`. This is to place emphasis on the fact that **only** the style rules in `theme.scss` are interpreted into css that's used by this application. Please ensure to add imports to this file when generating new sass files when needed.