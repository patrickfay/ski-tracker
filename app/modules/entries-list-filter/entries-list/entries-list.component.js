angular.module('skiTrackerApp')
  .component('entriesList', {
    bindings: {
      seasonsArr: '<',
      vitalListChange: '&onVitalListChange'
    },
    templateUrl: './modules/entries-list-filter/entries-list/entries-list.component.html',
    controller: 'entriesListCtrl',
  })

  .controller('entriesListCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.seasonsArr.forEach(_season => _season.isExpanded = false);
      $ctrl.seasonsArr[0].isExpanded = true;
    };

    
    // expand season container to show body
    $ctrl.expandSeason = (_season) => _season.isExpanded = !_season.isExpanded;
  });

require('./list-item/list-item.component');