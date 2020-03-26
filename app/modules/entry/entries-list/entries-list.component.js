angular.module('skiTrackerApp')
  .component('entriesList', {
    templateUrl: './modules/entry/entries-list/entries-list.component.html',
    controller: 'entriesListCtrl',
  })

  .controller('entriesListCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in entriesList component');
    };

  });