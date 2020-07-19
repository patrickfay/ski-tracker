# edit-entry-modal Component

This component is used to display a [uib modal](https://angular-ui.github.io/bootstrap/) that allows the user to update an entry.

This component does not update the entry object passed to it, that is up to the parent component when the user confirms the update action.

## Parameter

This component requires **one** piece of data to be passed to it through the `$uibModal.open({})` resolve object (see *Using This Component* section below).  
You must pass a `EntryObj` object. This component will not alter the entry object passed to it, instead it returns a seperate `EntryObj` with the user's updates.

## Return Value

One of two values will be returned when the modal is closed.

This component returns a `EntryObj` through the modal instance's result if the user presses the UPDATE button.  
Else this component returns the string `'cancel'` through the modal instance's result if hte user presses the CANCEL button.

## Using This Component

Using this component is simple, it only requires a few lines of JavaScript!  
**NOTE** - you must inject the `$uibModal` service into your controller.

The parent component's controller:

```javascript
angular.module('skiTrackerApp')
  .controller('yourController', function($uibModal) {
    $ctrl = this;

    // open the modal and store it's instance in a variable
    let _modalInstance = $uibModal.open({
      component: 'editEntryModal',
      size: 'lg',
      resolve: {
        entryObj: function() {
          return $ctrl.entryObj;    // required parameter for this component!!
        }
      }
    });

    // user presses 'update' button
    _modalInstance.result
      .then(($value) => {
        if (!!$value && $value !== 'cancel') {
          // do something
        }
      });
  });
```