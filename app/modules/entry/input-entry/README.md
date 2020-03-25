# input-entry Component

The input-entry component is used for creating or updating a Ski Day Entry. This component is easy to use and easy to implement into other components/views.

This README contains info about how to use the component.

## Using This Component

This component only has, and **requires**, one binding attribute:

| Binding Name | Type | Required | Description |
| ------------ | ---- | -------- | ----------- |
| `entryObj` | EntryObj | False | An Entry Object that can be passed to this component to populate the input fields with data. If omitted an empty entry object will be created by this component. |
| `onEntryGenerated` | Callback Function | True | Used to pass the Entry object, created by the user, to the parent component. The Entry object is be passed to the parent component through the parameter **`_entry`**. This callback function is called when the $broadcast `'generateEntryObject'` is broadcasted by the parent component. |

**NOTE** - THE PARENT COMPONENT MUST BROADCAST THE EVENT `'generateEntryObject'` TO RECIEVE A **VALID** ENTRY OBJECT. If you pass an entry object to this component, you cannot just use the binded Entry object in the parent scope because IT WILL BE AN INVALID ENTRY OBJECT. Because the user can manipulate the entry object using this component, we must ensure they entered valid information for an entry object before returning it to the parent component for use. The function called when the event`'generateEntryObject'` is emitted checks for valid input BEFORE generating and passing an entry object to the callback function `onEntryGenerated`.

### Example Using This Component

Your component.js file:

```javascript
.controller('controllerName', function($scope) {

  $scope.showInputEntryComponent = true;

  $scope.editableEntry = {
    date: new Date(),
    day: null,
    description: 'Beautiful cool sunny day. Skied some chalky pow bruh!',
    skiArea: skiAreaService.getSkiAreaByName('Solitude'),
    skiedWith: ['Erin', 'Dad'],
    stats: {
      skiVert: 11778,
      maxAlt: 10026,
      skiDist: 11.3,
      maxSpeed: 42.9
    }
  };

  // emit event to get valid entry object when user clicks button
  $scope.getValidEntryObj = () => {
    $scope.$broadcast('generateEntryObject');
  };

  $scope.handleUpdatedEntry = function(_entry) {
    // do something with new _entry here, like adding to userDataService
    $scope.showInputEntryComponent = false;
    $scope.editableEntry = _entry;
  };

});
```

Your component.html file:

```html
<div ng-if="showInputEntryComponent">

  <input-entry entry-obj="editableEntry"
              on-entry-generated="handleUpdatedEntry()">
  </input-entry>

  <button ng-click="getValidEntryObj()" type="button">Update Entry</button>

</div>
```