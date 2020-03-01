angular.module('skiTrackerApp')
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/playground', {
        templateUrl: 'views/playground/playground.html',
        controller: 'playgroundCtrl'
      });

    $routeProvider.otherwise({redirectTo: '/home'});
  });
