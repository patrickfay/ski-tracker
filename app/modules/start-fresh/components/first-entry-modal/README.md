# first-entry-modal Component

This component is used to display a [uib modal](https://angular-ui.github.io/bootstrap/) containing a success msg and a countdown timer.

This component does not handle any user data. The parent component is repsonisble for adding the new ski day entry using the `userDataService`.

## Using this component

Using this component is simple, it only requires a few lines of JavaScript!  
**NOTE** - you must inject the `$uibModal` service into your controller.

The parent component's controller:

```javascript
angular.module('skiTrackerApp')
  .controller('yourController', function($uibModal) {

    // open the modal and store it's instance in a variable
    let _modalInstance = $uibModal.open({
      component: 'firstEntryModal',
      size: 'lg',
      backdrop: 'static'
    });

    // on modal close
    _modalInstance.result
      .then(() => {
        // do something when the modal is closed
      });
  });
```

You can change control the size of the modal, but `lg` or `md` are recommended.

**NOTE** - Please use the parameter **`backdrop: 'static'`** for the modal instance!! This prevents any clicks outside of the modal from closing the modal, this way the user must wait for the modal to close itself.  
If you do not want to include this parameter, please ensure to add a second function to `result.then()`. See below for how to handle this case:

```javascript
_modalInstance.result
  .then(() => {
    // do something when the modal's close() function is called
  },
  () => {
    // do something when the user clicks outside of the modal, causing it close
  });
```