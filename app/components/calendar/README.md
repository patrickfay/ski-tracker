# Calendar Component

This component displays an immutable calendar with a highlighted date. This component uses the [UIB Datepicker](https://angular-ui.github.io/bootstrap/) with custom styling attributes.

This README contains info on the following:

* Using This Component
* How This Component Works

## Using This Component

To use this component, you only need to include it's element in the DOM and pass it one value through an attribute.

Your component.js file:

```javascript
.controller('controllerName', function($scope) {

  $scope.calendarDate = new Date();

});
```

Your component.html file:

```HTML
<calendar date="calendarDate"></calendar>
```

The only attribute this component takes is a JavaScript Date object. This value is passed to the `date` attribute.

## How This Component Works

This component works by altering both the styling of the **UIB Datepicker** and some of its attributes/options to make all date selections immutable. This Component's goal is to display and highlight one date (passed to this component through the `date` binding attribute). That is it (ie. no other UIB Datepicker functionality).

Since this is component is basically a UIB Datepicker, the UIB Datepicker's functionality as a calendar with selectbale dates is still present. To combat and hide the UIB Datepicker functionality, certain values passed as attributes to the UIB Datepicker are altered to make it act immutable (see the section Altered Attributes). Buttons are also hidden that allows the user to toggle through different views (see the seciont UIB Dateipcker Different Views).

### Altered Attributes

The attributes values that are altered are the `min-date` and `max-date` attributes (we utilize the attribute `datepicker-options` to pass a multitude of other attribute values, as opposed to adding an attribute foreach option to the HTML component's element).

The **`minDate`** value is set to 1 day **after** the value of `date`.  
The **`maxDate`** value is set to 1 day **before** the value of `date`.

This makes every date on the calendar 'out of bounds' and unselectable by the user. This causes the UIB Datepicker component to append the `[disabled]` property to each date visable on the calendar (each date you can see on the calendar is a `<button>` with a child `<span>` element).  
**The ONLY date that does not recieve the `[disabled]` property in the calendar is the date passed to this comonent!!**  
This is vital for how the styling works to achieve what appears as a regular, immutable, calendar with one highlighted date.

### Altered Styling

To properly style the 'immutable' calendar this component leverages the fact that all dates are child `<span>` elements to a `<button>` parent element, and the date this component highlights is not within a **disabled** button element.

Our styling works by essentially making it appear the calendar contains no buttons (ie. cursor is always `default`, and no other hover styling), and since all buttons are disabled the UIB Datepicker performs no actions when a different date is clicked on by the user.

**NOTE** - The date this component highlights does not **always** have a class appened to it's element to allow this component to identify it.  
**IF MULTIPLE CALENDAR COMPONENTS ARE DISPLAYED IN ONE VIEW, ONLY *ONE* CALENDAR COMPONENT HAS A UNIQUE CLASS APPENDED TO A HIGHLIGHTED DATE**

To highlight a date, our styling applys our highlighted date styling to **all** dates (`<button>` and `<span>` elements) in the calendar.

Since all dates on the calendar are 'out of bounds' and disabled, except for the value passed to the UIB Datepicker component, the styling for `[disabled]` buttons is set to make them appear like regular, non highlighted, dates on the calendar.

This bascially allows us to uniquely identify the date passed to the UIB Datepicker compoennt.

#### UIB Datepicker Different Views

The UIB Datepicker allows the user to toggle through different views (Days, Months, & Years). Since this component creates the illusion of an immutable calendar it hides the buttons that allow the user to trigger these actions.

To do this a `display: none;` style attribute is appended to the table row in the calendar containing these buttons.  
This is the first row of the table header (`<thead>`).