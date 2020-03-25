# dropdown Component

The `dropdown` component can be used to implement two types of dropdowns.

The **simple** dropdown acts like a normal `<select>` dropdown with custom styling.  
The **multiselect** dropdown also acts like a `<select>` dropdown except a user can select multiple options from the dropdown.

## Using This Component

To use this component you can only include it in your template as the element

```HTML
<dropdown></dropdown>
```

This component has **five** bindings. Three are required for both types of dropdowns. Four are required for the multiselect dropdown.

| Binding Name | Type | Required | Description |
| ------------ | ---- | -------- | ----------- |
| `dropdownType` | String | True | Defines what type of dropdown is being displayed. The value of this string **MUST** be `simple` or `multiselect` |
| `defaultVal` | String | False | The first option displayed in the dropdown. If omitted the default value is `-- select --` for a simple dropdown or `Select Options` for a multiselect dropdown. |
| `optionsArr` | Array | True | The selectable options for the dropdown. |
| `initSelected` | Array or String | False | The option(s) selected when this component is initiated. If omitted the default value is `$ctrl.defaultVal` for a simple dropdown or an empty array for a multiselect dropdown |
| `addNewAllowed` | Boolean | False | If true, user will be allowed to add new options to a `multiselect` dropdown. Default is falsy value. |
| `onItemSelect` | Callback Function | True | Passes the selected item in the dropdown to the parent component through the parameter `_value`. If the user selects the default value in the **simple** dropdown (ie. -- select --), an empty string (`''`) will be passed to the callback function. |
| `onNewItemAdded` | Callback Function | False | Passes a newly added item to the dropdown to the parent component through the parameter `_newItem` as a String. This callback function is only used for the `multiselect` dropdown. |

### Example Using This Component

Your component.js file:

```javascript
.controller('controllerName', function($scope) {

  $scope.dropdownSimpleOptions = ['John Doe', 'Rick James', 'Eli Manning'];
  $scope.dropdownMultiselectOptions = ['Dan Katz', 'Stevie Nicks', 'Brandon Jacobs'];

  $scope.multiselectSelected = ['Dan Katz', 'Brandon Jacobs'];

  $scope.handleSelectedValue = function(_value) {
    // do something with _value here
  };

  $scope.handleAddedItem = function(_newItem) {
    // It is recommended you use unshift() so the new item
    // appears at top of dropdown when user adds it.
    $scope.dropdownMultiselectOptions.unshift(_newItem);
  };

});
```

Your component.html file:

```HTML
<!-- simple dropdown - NO init value -->
<dropdown dropdown-type="simple"
          default-val="-- select friends --"
          options-arr="dropdownSimpleOptions"
          on-item-select="handleSelectedValue(_value)">
</dropdown>

<!-- multiselect dropdown - NO init value -->
<dropdown dropdown-type="multiselect"
          default-val="Choose Your Friends"
          options-arr="dropdownMultiselectOptions"
          add-new-allowed="true"
          on-item-select="handleSelectedValue(_value)"
          on-new-item-added="handleAddedItem(_newItem)">
</dropdown>


<!-- simple dropdown - WITH init value -->
<dropdown dropdown-type="simple"
          default-val="-- select friends --"
          options-arr="dropdownSimpleOptions"
          init-selected="dropdownSimpleOptions[2]"
          on-item-select="handleSelectedValue(_value)">
</dropdown>

<!-- multiselect dropdown - WITH init value -->
<dropdown dropdown-type="multiselect"
          default-val="Choose Your Friends"
          options-arr="dropdownMultiselectOptions"
          init-selected="multiselectSelected"
          add-new-allowed="true"
          on-item-select="handleSelectedValue(_value)"
          on-new-item-added="handleAddedItem(_newItem)">
</dropdown>
```