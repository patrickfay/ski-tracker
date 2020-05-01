angular.module('skiTrackerApp')
  .component('viewEntry', {
    bindings: {
      entry: '<'
    },
    templateUrl: './modules/entry/view-entry/view-entry.component.html',
    controller: 'viewEntryCtrl',
  })

  .controller('viewEntryCtrl', function() {
    $ctrl = this;

    // $ctrl.$onInit = () => {

    // };

  });