angular.module('skiTrackerApp')
  .component('entriesList', {
    bindings: {
      seasonsArr: '<'
    },
    templateUrl: './modules/entries-list-filter/entries-list/entries-list.component.html',
    controller: 'entriesListCtrl',
  })

  .controller('entriesListCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in entriesList main component with our arr of seasons and entries', $ctrl.seasonsArr);
    };

  });