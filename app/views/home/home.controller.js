angular.module('skiTrackerApp')
  .controller('homeCtrl', function($scope) {

    $scope.tooltipMsgs = [
      'Save as much info about your day of skiing as you can! Any entry you create can have as much or as little information as you want to track! Some of the options are below.',
      'Filter the days you want to see! Trying to remember a specific day somewhere or with someone? Fastest speed? Apply a filter to find the day you did that!'
    ];
  
  });