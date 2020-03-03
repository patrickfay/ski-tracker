angular.module('skiTrackerApp')
  .controller('entriesCtrl', function($scope, userDataService) {

    // get user data
    $scope.userData = {
      entries: userDataService.getEntries(),
      skiPartners: userDataService.getSkiPartners()
    };
  
  });