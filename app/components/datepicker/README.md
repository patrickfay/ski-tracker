# datepicker Component

The `datepicker` component uses the uib-datepicker with custom styling. This component also allows for asimple datepicker implementation across the application.

This README contains info on how to use the `datepicker` component.

## Using This Component

To use this component you can include it in your template as the element

```HTML
<datepicker></datepicker>
```

This component has **five** bindings. Two are required and three are optional.

| Binding Name | Type | Required | Description |
| ------------ | ---- | -------- | ----------- |
| `date` | JavaScript Date | True | The inital value of the datepicker. |
| `format` | String | False | The format of the date displayed in the text input field (ie. 'MM/dd/yyyy', 'dd-MM-yyyy', etc). If omitted the default value is `'MM/dd/yyyy'`. |
| `minDate` | JavaScript Date | False | The minimum selectable date from the datepicker (inclusive). |
| `maxDate` | JavaScript Date | False | The maximum selectable date from the datepicker (inclusive). |
| `onDateSelect` | Callback Function | True | Passes the selected date to a callback function. The selected date object passed as a parameter to this function will be a **JavaScript Date object**. The parameter name of the date object will be `_value`. |

### Example Using This Component

Your component.js file:

```javascript
.controller('controllerName', function($scope) {

  $scope.datepicker = {
    date: new Date(),
    format: 'MM/dd/yyyy',
    minDate: getOffestDate(-2),
    maxDate: getOffestDate(5)
  };

  $scope.handleDateChange = (_value) => {
    // do something with _value here
  };

  // return a date offset by the number of days specified by the parameter _offset
  function getOffestDate(_offset) {
    let _date = new Date();

    _date.setDate(_date.getDate() + _offset);

    return _date;
  }
});
```

Your component.html file:

```HTML
<datepicker date="datepicker.date"
            format="{{datepicker.format}}"
            min-date="datepicker.minDate"
            max-date="datepicker.maxDate"
            on-date-select="handleDateChange(_value)">
</datepicker>
```