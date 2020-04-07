angular.module('skiTrackerApp')
  .component('entriesFilter', {
    templateUrl: './modules/entries-list-filter/entries-filter/entries-filter.component.html',
    controller: 'entriesFilterCtrl',
  })

  .controller('entriesFilterCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      // console.log('in entriesFilter component');
    };

  });