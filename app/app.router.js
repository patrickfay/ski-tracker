angular.module('skiTrackerApp')
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

<<<<<<< HEAD
    // route definitions
=======
>>>>>>> release/1.0.0
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'homeCtrl'
      })
      .when('/playground', {
        templateUrl: 'views/playground/playground.html',
        controller: 'playgroundCtrl'
      })
      .when('/view1', {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'views/view2/view2.html',
        controller: 'View2Ctrl'
      });

<<<<<<< HEAD
    // redirect to home page on load
=======
>>>>>>> release/1.0.0
    $routeProvider.otherwise({redirectTo: '/home'});
  });
