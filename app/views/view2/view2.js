skiTrackerApp.controller('View2Ctrl', ['$scope', function($scope) {

  $scope.testArr = ['yoooo', 'ayoo', 'sgood?', 'aight den'];
  
  // used to pass to powder action component
  $scope.pwdrBtnVal = 'Randy Man';
  $scope.pwdrMsg = 'Frig off Mr. Lahey!!';
  $scope.pwdrBtnClass = 'st-btn-powder-woohoo';

}]);