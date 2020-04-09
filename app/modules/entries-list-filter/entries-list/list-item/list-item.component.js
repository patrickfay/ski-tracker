angular.module('skiTrackerApp')
  .component('entriesListItem', {
    bindings: {
      entry: '<',
      isLast: '<'
    },
    templateUrl: './modules/entries-list-filter/entries-list/list-item/list-item.component.html',
    controller: 'entriesListItemCtrl',
  })

  .controller('entriesListItemCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.entry.isExpanded = false;
    };

  });