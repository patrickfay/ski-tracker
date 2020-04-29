# delete-entry-modal Component

This component is used to display a [uib modal](https://angular-ui.github.io/bootstrap/) confirming if the user wants to delete an entry.

This component does not delete the entry, that is up to the parent component when the user confirms the delete action.

## Using this component

Using this component is simple, it only requires a few lines of JavaScript!  
**NOTE** - you must inject the `$uibModal` service into your controller.

The parent component's controller:

```javascript
angular.module('skiTrackerApp')
  .controller('yourController', function($uibModal) {

    // open the modal and store it's instance in a variable
    let _modalInstance = $uibModal.open({
      component: 'deleteEntryModal',
      size: 'md'
    });

    // user presses 'delete' button
    _modalInstance.result
      .then(($value) => {
        if ($value === 'delete') {
          // do something
        } else if ($value === 'cancel') {
          // do something else
        }
      });
  });
```

**NOTE** - Please use the parameter **`backdrop: 'static'`** for the modal instance!! This prevents any clicks outside of the modal from closing the modal, this way the user must click the 'DELETE' or 'CANCEL' button to close the modal.  
These values (which are passed through the `$value` parameter) allow us to know what action the user has selected.