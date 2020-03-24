angular.module('skiTrackerApp')
  .controller('entriesCtrl', function($scope, userDataService, skiAreaService) {

    // TODO - delete this when finished implementing 'entries-dashboard' module
    let testEntryObj = {
      date: new Date(),
      skiArea: skiAreaService.getSkiAreaByName('Alta'),
      skiedWith: [],
      stats: {
        skiVert: 25951,
        maxAlt: 10543,
        skiDist: 26.1,
        maxSpeed: 38.6
      },
      description: 'So awesome. Was supposed to get half an inch but seemed like they got 4" after 6am. Everything was refreshed and what a day. Did a lot of hiking (baldy shoulder, Catherines 3x, high backside (towards east greely) 2x, and a lot of steep skiing. Did cool chutes off front of Catherines. Found some steep (and serious) stuff off of trees past last usual run (really awesome). Fucking great day ripping around. Woohoo!'
    };
    userDataService.addEntry(testEntryObj);

    // get user data
    $scope.userData = {
      entries: userDataService.getEntries(),
      skiPartners: userDataService.getSkiPartners()
    };
  });