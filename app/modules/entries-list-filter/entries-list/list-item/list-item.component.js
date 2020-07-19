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

      // toggle edit entry modal
      } else if (_action === 'edit') {
        $ctrl.modalIsOpen = true;

        let _modalInstance = $uibModal.open({
          component: 'editEntryModal',
          size: 'lg',
          backdrop: 'static',
          resolve: {
            entryObj: function() {
              return $ctrl.entry;
            }
          }
        });

        // on update confirmation, update the entry (a vital change will occur if user updates the entry's date)
        _modalInstance.result
          .then(($value) => {
            let entryUpdateStatusObj = userDataService.updateEntry($value, $ctrl.entry.date);

            // call for vital change, or update this comonent's entry object
            entryUpdateStatusObj.isVitalChange ? $ctrl.vitalChange() : $ctrl.entry = entryUpdateStatusObj.entry;

            $ctrl.modalIsOpen = false;
          });        

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