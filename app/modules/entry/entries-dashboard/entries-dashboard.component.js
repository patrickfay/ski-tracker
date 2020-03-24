angular.module('skiTrackerApp')
  .component('entriesDashboard', {
    templateUrl: './modules/entry/entries-dashboard/entries-dashboard.component.html',
    controller: 'entriesDashboardCtrl',
  })

  .controller('entriesDashboardCtrl', function(userDataService) {
    let $ctrl = this;

    $ctrl.allEntries = null;

    $ctrl.$onInit = () => {
      $ctrl.allEntries = userDataService.getEntries();
      console.log($ctrl.allEntries);
    };

  });