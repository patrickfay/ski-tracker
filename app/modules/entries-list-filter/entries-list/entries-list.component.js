angular.module('skiTrackerApp')
  .component('entriesList', {
    templateUrl: './modules/entries-list-filter/entries-list/entries-list.component.html',
    controller: 'entriesListCtrl',
  })

  .controller('entriesListCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in entriesList main component');
    };

  });