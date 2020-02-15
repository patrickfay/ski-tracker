// angular.module('app', ['ngRoute'])
angular.module('view1', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  console.log('in view 1 noeimsayn');

  $scope.value = 'I am the value dud';
  $scope.msg = 'msg? How about a tip? get a job bud';
  $scope.class = 'st-btn-powder-woohoo';
  
}]);