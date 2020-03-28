angular.module('skiTrackerApp')
  .component('viewEntry', {
    templateUrl: './modules/entry/view-entry/view-entry.component.html',
    controller: 'viewEntryCtrl',
  })

  .controller('viewEntryCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in view-entry component');
    };

  });