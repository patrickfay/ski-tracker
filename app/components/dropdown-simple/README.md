# dropdown-simple Component

The `dropdown-simple` component can be used like any other dropdown. This component has custom styling and makes it easier and cleaner to use in components than a normal dropdown would be.

This README contains info on how to use the `dropdown-simple` component.

## Using This Component

To use this component you can only include it in your template as the element

```HTML
<dropdown-simple></dropdown-simple>
```

### Bindings

This component has **three** bindings. Two are required and one is optional.

| Binding Name | Type | Required | Description |
| ------------ | ---- | -------- | ----------- |
| `defaultVal` | String | False | The first option displayed in the dropdown. If omitted the default value is `-- select --`. |
| `optionsArr` | Array | True | The selectable options for the dropdown. |
| `onItemSelect` | Callback Function | True | Passes the selected item in the dropdown to the parent component through the parameter `_value`. If the use selects the default value (ie. -- select --) from the dropdown, an empty string (`''`) will be passed to the callback function. |

### Example Using This Component

Your component.js file:

```javascript
.controller('controllerName', function($scope) {

  $scope.dropdownOptions = ['John Doe', 'Rick James', 'Eli Manning'];

  $scope.handleSelectedValue = function(_value) {
    // do something with _value here
  };

});
```

Your component.html file:

```HTML
<dropdown-simple default-val="-- select ski area --"
                 options-arr="dropdownOptions"
                 on-item-select="handleSelectedValue(_value)">
</dropdown-simple>
```