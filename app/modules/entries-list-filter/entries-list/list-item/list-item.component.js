angular.module('skiTrackerApp')
  .component('entriesListItem', {
    bindings: {
      entry: '<',
      vitalChange: '&onVitalEntryChange',
      isLast: '<'
    },
    templateUrl: './modules/entries-list-filter/entries-list/list-item/list-item.component.html',
    controller: 'entriesListItemCtrl',
  })

  .controller('entriesListItemCtrl', function(userDataService, $uibModal) {
    let $ctrl = this;
    $ctrl.bodyContent = null;
    $ctrl.modalIsOpen = null;

    $ctrl.$onInit = () => {
      $ctrl.bodyContent = 'none';
      $ctrl.modalIsOpen = false;
    };


    /**
     * Updates the view of the entry body DOM element.
     * 
     * @param {string} _action The action the user is triggering (will be 'toggle', 'edit', or 'delete').
     */
    $ctrl.updateBodyView = (_action) => {
      if (_action === 'toggle') {

        // if the body was hidden, display it
        if ($ctrl.bodyContent === 'none') {
          $ctrl.bodyContent = 'view';

          // get all data for entry obj if it has not already been gotten
          if ($ctrl.entry.description === undefined) {
            $ctrl.entry = userDataService.getEntryByDate($ctrl.entry.date);
          }
        } else {
          $ctrl.bodyContent = 'none';
        }

      // display the edit-entry component in the body
      } else if (_action === 'edit') {
        $ctrl.bodyContent = 'edit';

      // toggle delete confirm modal and delete entry
      } else if (_action === 'delete') {
        $ctrl.modalIsOpen = true;

        let _modalInstance = $uibModal.open({
          component: 'deleteEntryModal',
          size: 'md',
          backdrop: 'static'
        });

        // on delete confirmation, delete the entry and alert parent component of vital change to data struct
        _modalInstance.result
          .then(($value) => {
            if ($value === 'delete') {
              userDataService.removeEntryByDate($ctrl.entry.date);
              $ctrl.vitalChange();
            }

            $ctrl.modalIsOpen = false;
          });
      }
    };

  });