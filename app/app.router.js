angular.module('skiTrackerApp')
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    // route definitions
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'homeCtrl'
      })
      .when('/view1', {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'views/view2/view2.html',
        controller: 'View2Ctrl'
      });

    // redirect to home page on load
    $routeProvider.otherwise({redirectTo: '/home'});
  });
