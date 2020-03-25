angular.module('skiTrackerApp')
  .controller('entriesDashboardCtrl', function($scope, userDataService) {

    $scope.allEntries = userDataService.getEntries();
    console.log($scope.allEntries);

  });