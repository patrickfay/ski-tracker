angular.module('skiTrackerApp')
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    // route definitions
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'homeCtrl'
      })
      .when('/entries', {
        templateUrl: 'views/entries/entries.html',
        controller: 'entriesCtrl'
      })
      .when('/start-fresh', {
        templateUrl: 'views/start-fresh/start-fresh.html',
        controller: 'startFreshCtrl'
      })
      .when('/entries-dashboard', {
        templateUrl: 'views/entries-dashboard/entries-dashboard.html',
        controller: 'entriesDashboardCtrl'
      })
      .when('/playground', {
        templateUrl: 'views/playground/playground.html',
        controller: 'playgroundCtrl'
      });

    // redirect to home page on load
    $routeProvider.otherwise({redirectTo: '/home'});
  });
