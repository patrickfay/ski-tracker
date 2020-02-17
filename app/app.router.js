angular.module('skiTrackerApp')
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});

    $routeProvider
      .when('/view1', {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'views/view2/view2.html',
        controller: 'View2Ctrl'
      });
  });
