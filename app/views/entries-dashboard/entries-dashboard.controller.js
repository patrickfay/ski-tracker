angular.module('skiTrackerApp')
  .controller('entriesDashboardCtrl', function($scope, userDataService, skiAreaService) {

    // add mock data
    addMockData();

    // init seasons obj
    $scope.seasons = {
      all: userDataService.getAllSeasonsSimple(),       // all entries
      displayed: userDataService.getAllSeasonsSimple()  // filtered entries passed to entries-list to display
    };


    /**
     * Update all season data after a vital change to seasons data struct was made by the user.
     * All vital changes will be made from within the 'entries-list-item' component
     */
    $scope.refreshSeasonsData = () => {
      // store curr expanded state of each season
      let _prevSeasonsStates = $scope.seasons.displayed.map(s => {
        return {
          startDate: s.startDate,
          isExpanded: s.isExpanded
        };
      });

      // refresh seasons data struct after vital changes were made
      $scope.seasons.all = userDataService.getAllSeasonsSimple();
      $scope.applyFilter();

      // restore expanded state of each season
      $scope.seasons.displayed.forEach(s => {
        for (let i = 0; i < _prevSeasonsStates.length; i++) {
          if (s.startDate === _prevSeasonsStates[i].startDate) {
            s.isExpanded = _prevSeasonsStates[i].isExpanded;
            break;
          }
        }
      });
    }

    // TODO - implement functionality when filter component is completed
    $scope.applyFilter = () => {
      $scope.seasons.displayed = userDataService.getAllSeasonsSimple();
    };



    // Used for testing the entries-list DELETE WHEN DONE TESTING
    function addMockData() {
      userDataService.addSkiPartner('Erin');
      userDataService.addSkiPartner('Dad');

      userDataService.addEntry(getMockEntry(-40));
      userDataService.addEntry(getMockEntry(-40));
      userDataService.addEntry(getMockEntry(2));
      userDataService.addEntry(getMockEntry(-450));
      userDataService.addEntry(getMockEntry(-78));
      userDataService.addEntry(getMockEntry(-37));
      userDataService.addEntry(getMockEntry(-400));
      userDataService.addEntry(getMockEntry(-64));
      userDataService.addEntry(getMockEntry(-490));
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