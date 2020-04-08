angular.module('skiTrackerApp')
  .controller('entriesDashboardCtrl', function($scope, userDataService, skiAreaService) {

    // add mock data
    addMockData();

    $scope.allEntries = userDataService.getAllSeasonsSimple();  // all entries
    $scope.displayedEntries = $scope.allEntries;                // filtered entries passed to entries-list to display


    // Used for testing the entries-list DELETE WHEN DONE TESTING
    function addMockData() {
      userDataService.addSkiPartner('Erin');
      userDataService.addSkiPartner('Dad');

      // add 15 entries (w/ diff dates) to user entries
      // for (let i = 0; i > -15; i--) userDataService.addEntry(getMockEntry(i));

      userDataService.addEntry(getMockEntry(-20));
      userDataService.addEntry(getMockEntry(2));
      userDataService.addEntry(getMockEntry(-450));
      userDataService.addEntry(getMockEntry(-18));
      userDataService.addEntry(getMockEntry(-27));
      userDataService.addEntry(getMockEntry(-400));
      userDataService.addEntry(getMockEntry(-24));
      userDataService.addEntry(getMockEntry(-470));

      console.log(userDataService.getAllSeasons());
    }

    // TODO - delete when done testing entries-list
    function getMockEntry(_dateOffset) {
      let _date = new Date();
      _date.setDate(_date.getDate() + _dateOffset);

      return {
        date: _date,
        day: null,
        description: 'Beautiful warm sunny day. Got to Solitude around noon. Barely anyone there. They reported 13" from Sunday. Hiked up evergreen and came down towards open bowl on side with usually traverse for the first time. Wow. Powder woohoo! Even tho it was warm, sun prob never hits that aspect, so nice!! Did that again and then got a usual burrito.',
        skiArea: skiAreaService.getSkiAreaByName('Solitude'),
        skiedWith: ['Erin', 'Dad'],
        stats: {
          skiVert: 11778,
          maxAlt: 10026,
          skiDist: 11.3,
          maxSpeed: 42.9
        }
      };
    }

  });