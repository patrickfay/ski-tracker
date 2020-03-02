angular.module('skiTrackerApp')
  .controller('entriesCtrl', function($scope, $location, userDataService) {

    $scope.UserData = null;

    console.log(userDataService.getSkiPartners(), userDataService.getEntries());
  
  });