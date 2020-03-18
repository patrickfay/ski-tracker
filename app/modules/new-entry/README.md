# new-entry Module

The new-entry component is used for creating a new Ski Day Entry. This component is easy to use and easy to implement into other components/views.

This README contains info about how to use the component.

## Using This Component

This component only has, and **requires**, one binding attribute:

| Binding Name | Type | Description |
| ------------ | ---- | ----------- |
| `onEntryCreation` | Callback Function | Used to pass the Entry object, created by the user, to the parent component. The Entry object will be passed to the parent component through the parameter **`_entry`**. |

**NOTE** - we pass this object, rather than using the `userDataService` within this component, to the parent component because we do not want to manipulate application wide data within this component.  
The **only** application wide data we update within this component is `skiedWith` data, since the user may have to add people they skied with while interacting with this component. Controlling this data within this component helps keep code simplified in the parent component.

### Example Using This Component

Your component.js file:

```javascript
.controller('controllerName', function($scope, userDataService) {

  $scope.handleNewEntry = function(_entry) {
    // do something with new _entry here, like adding to userDataService
    userDataService.addEntry(_entry);
  };

});
```

Your component.html file:

```html
<new-entry on-entry-creation="handleNewEntry(_entry)"></new-entry>
```