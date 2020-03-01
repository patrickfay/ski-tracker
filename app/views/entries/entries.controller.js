angular.module('skiTrackerApp')
  .controller('entriesCtrl', function($scope) {

    $scope.UserData = null;

    console.log('in our new entries page! YABOO!', $scope.UserData);
  
  });