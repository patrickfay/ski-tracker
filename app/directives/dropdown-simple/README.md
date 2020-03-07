# dropdown-simple Directive

The `dropdown-simple` component can be used like any other dropdown. This directive has custom styling and makes it easier and cleaner to use in components than a normal dropdown would be.

This README contains info on how to use the `dropdown-simple` directive.

## Using this directive

To use this directive you can only include it in your template as the element

```HTML
<dropdown-simple></dropdown-simple>
```

This directive uses an isolated scope. There are **three** attributes that can be passed to this directive. One attribute can be omitted and two are required.

* **`defaultVal`** a one way binding, must be a **string**. This attribute can be omitted.
  * The value of this attribute will be used as the first option displayed in the dropdown. If omitted the first value of the dropdown will be `-- select --`.
* **`optionsArr`** a one way binding, must be an **array**.
  * The selectable options for the dropdown.
* **`itemSelect`** an output binding used to pass the selected value to a callback function.
  * The value of the selected item that is passed to the callback function will be stored in the variable `_value`.

### Example Using This Directive in a Component

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
