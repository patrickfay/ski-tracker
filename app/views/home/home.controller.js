angular.module('skiTrackerApp')
  .controller('homeCtrl', function($scope, $location, userDataService) {

    $scope.tooltipMsgs = [
      'Save as much info about your day of skiing as you can! Any entry you create can have as much or as little information as you want to track! All listed options are optional.',
      'Filter the days you want to see! Trying to remember a specific day somewhere or with someone? Fastest speed? Apply a filter to find the day you did that!'
    ];


    /**
     * redirect the user to the specified view
     * @param {string} _path the path to a view
     * @param {string} _qryStrParams the query string parameters to append to the URL
     */
    $scope.redirectToEntries = (_startFresh) => {
      let _path = 'entries?startFresh=' + (_startFresh ? 'true' : 'false');

      userDataService.addSkiPartner('Premo Dude');
      userDataService.setEntries({skiArea: "pow mow", description: "There was powder!! Woohoo!!"});

      $location.url(_path);
    };
  

    // $scope.testFunction = () => {
    //   console.log('uhhh in here');
    //   console.log('..')
    // };
  });