angular.module('skiTrackerApp')
  .controller('homeCtrl', function($scope, $location, userDataService) {

    $scope.tooltipMsgs = [
      'Save as much info about your day of skiing as you can! Any entry you create can have as much or as little information as you want to track! All listed options are optional.',
      'Filter the days you want to see! Trying to remember a specific day somewhere or with someone? Fastest speed? Apply a filter to find the day you did that!'
    ];

    // TOOD - upload funcitonality (will want to populate service with data then redirect)
    $scope.upload = () => {
      // upload some data here boss
      console.log('uploading! :^)+<');
    };

    /**
     * clear data stored in service and redirect user to 'entries' view
     */
    $scope.startFresh = () => {
      userDataService.clearData();
      $location.url('entries');
    };

  });