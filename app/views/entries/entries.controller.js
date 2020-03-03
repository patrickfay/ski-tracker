angular.module('skiTrackerApp')
  .controller('entriesCtrl', function($scope, $location, userDataService) {

    $scope.UserData = null;

    // test data is passed between controllers
    console.log(userDataService.getSkiPartners(), userDataService.getEntries());
  
  });