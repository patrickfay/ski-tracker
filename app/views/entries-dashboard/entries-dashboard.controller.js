angular.module('skiTrackerApp')
  .controller('entriesDashboardCtrl', function($scope, userDataService) {

    $scope.allEntries = userDataService.getEntries();
    console.log($ctrl.allEntries);

    // let $ctrl = this;

    // $ctrl.allEntries = null;

    // $ctrl.$onInit = () => {
    //   $ctrl.allEntries = userDataService.getEntries();
    //   console.log($ctrl.allEntries);
    // };

  });