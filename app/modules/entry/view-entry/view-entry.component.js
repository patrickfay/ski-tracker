angular.module('skiTrackerApp')
  .component('viewEntry', {
    bindings: {
      entry: '<'
    },
    templateUrl: './modules/entry/view-entry/view-entry.component.html',
    controller: 'viewEntryCtrl',
  })

  .controller('viewEntryCtrl', function($filter) {
    $ctrl = this;

    $ctrl.getFormattedVal = (_val) => {
      return $filter('number')(_val, 0) + ' ft';
    };

  });