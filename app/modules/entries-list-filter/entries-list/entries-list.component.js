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
      $ctrl.seasonsArr.forEach(_season => _season.isExpanded = false);
      $ctrl.seasonsArr[0].isExpanded = true;

      console.log('in entriesList main component with our arr of seasons and entries', $ctrl.seasonsArr);
    };

    
    // expand season container to show body
    $ctrl.expandSeason = (_season) => _season.isExpanded = !_season.isExpanded;

  });