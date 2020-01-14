'use strict';

angular.module('app', [
  'ngRoute',
  'view1',
  'view2',
  'app.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
