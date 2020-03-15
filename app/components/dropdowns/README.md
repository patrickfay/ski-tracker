# dropdown Component

The `dropdown` component can be used to implement two types of dropdowns.

The **simple** dropdown acts like a normal `<select>` dropdown with custom styling.  
The **multiselect** dropdown also acts like a `<select>` dropdown except a user can select multiple options from the dropdown.

## Using This Component

To use this component you can only include it in your template as the element

```HTML
<dropdown></dropdown>
```

This component has **four** bindings. Three are required and one is optional.

| Binding Name | Type | Required | Description |
| ------------ | ---- | -------- | ----------- |
| `dropdownType` | String | True | Defines what type of dropdown is being displayed. The value of this string **MUST** be `simple` or `multiselect` |
| `defaultVal` | String | False | The first option displayed in the dropdown. If omitted the default value is `-- select --` for a simple dropdown or `Select Options` for a multiselect dropdown. |
| `optionsArr` | Array | True | The selectable options for the dropdown. |
| `onItemSelect` | Callback Function | True | Passes the selected item in the dropdown to the parent component through the parameter `_value`. If the user selects the default value in the **simple** dropdown (ie. -- select --), an empty string (`''`) will be passed to the callback function. |

### Example Using This Component

Your component.js file:

```javascript
.controller('controllerName', function($scope) {

  $scope.dropdownSimpleOptions = ['John Doe', 'Rick James', 'Eli Manning'];
  $scope.dropdownMultiselectOptions = ['Dan Katz', 'Stevie Nicks', 'Brandon Jacobs'];

  $scope.handleSelectedValue = function(_value) {
    // do something with _value here
  };

});
```

Your component.html file:

```HTML
<dropdown dropdown-type="simple"
          default-val="-- select friends --"
          options-arr="dropdownSimpleOptions"
          on-item-select="handleSelectedValue(_value)">
</dropdown>

<dropdown dropdown-type="multiselect"
          default-val="Choose Your Friends"
          options-arr="dropdownMultiselectOptions"
          on-item-select="handleSelectedValue(_value)">
</dropdown>
```