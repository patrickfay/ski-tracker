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

  .controller('entriesListItemCtrl', function(userDataService) {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.bodyContent = 'none';
    };

    $ctrl.updateBodyView = (_action) => {
      if (_action === 'toggle') {

        if ($ctrl.bodyContent === 'none') {
          $ctrl.bodyContent = 'view';

          if ($ctrl.entry.description === undefined) {
            $ctrl.entry = userDataService.getEntryByDate($ctrl.entry.date);
          }
        } else {
          $ctrl.bodyContent = 'none';
        }        

      } else if (_action === 'edit') {
        $ctrl.bodyContent = 'edit';

      } else if (_action === 'delete') {
        // TODO - acutally delete this element yo
        console.log('deleting self... well this sucks');
        userDataService.removeEntryByDate($ctrl.entry.date);
        $ctrl.vitalChange();
      }
    };

  });