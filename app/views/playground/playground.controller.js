angular.module('skiTrackerApp')
  .controller('playgroundCtrl', function($scope, userDataService, skiAreaService) {

    $scope.calendarDate = new Date();

    $scope.datepicker = {
      date: new Date(),
      format: 'MM/dd/yyyy',
      minDate: getOffestDate(-2),
      maxDate: getOffestDate(5)
    };

    $scope.testOptions1 = [
      'Randy',
      'Lahey',
      'Ricky',
      'Julian',
      'Bubbles',
      'Patrick Schwayze'
    ];

    $scope.testOptions2 = [
      'Stan',
      'Kyle',
      'Cartman',
      'Kenny',
      'Butters',
      'Mr. Garrison'
    ];

    // service will check for duplicates so no need for track by in dropdown ngrepeat
    $scope.testOptions3 = [
      'Erin',
      'John',
      'Mom',
      'Dad',
      'Matt',
      'Premo Guy',
      'Erin1',
      'John1',
      'Mom1',
      'Dad1',
      'Matt1'
    ];

    /* Data for input-entry component */
    userDataService.addSkiPartner('Erin');
    userDataService.addSkiPartner('John');
    userDataService.addSkiPartner('Dad');
    userDataService.addSkiPartner('Mom');

    $scope.testEntryObj = {
      date: getOffestDate(-15),
      day: null,
      description: 'Beautiful warm sunny day. Got to Solitude around noon. Barely anyone there. They reported 13" from Sunday. Hiked up evergreen and came down towards open bol on side with usually traverse for the first time. Wow. Powder woohoo! Even tho it was warm, sun prob never hits that aspect, so nice!! Did that again and then got a usual burrito.',
      skiArea: skiAreaService.getSkiAreaByName('Solitude'),
      skiedWith: ['Erin', 'Dad'],
      stats: {
        skiVert: 11778,
        maxAlt: 10026,
        skiDist: 11.3,
        maxSpeed: 42.9
      }
    };
    $scope.testEntryObj.description += ' Then headed to honeycomb, saw fantasy hike and was tempted to do first part (stops before before sketchy part) but I want to do James peak tom so saving legs. Went to usual spot on far side. Pretty good on more shaded areas. Did 2 runs up slow chair in middle after then headed home a little after 3. Was mid 40s when left. Beautiful and great day! Woohoo!';
    /* END Data for input-entry component */

    $scope.generateEntryObj = () => {
      $scope.$broadcast('generateEntryObject');
    };

    $scope.printSelectedVal = (_value) => console.log('selected dropdown value(s):', _value);

    $scope.dateChanged = (_value) => console.log('selected date:', _value);

    $scope.addToTestOptions3 = (_newItem) => $scope.testOptions3.unshift(_newItem);

    $scope.addNewEntry = (_entry) => userDataService.addEntry(_entry);

    // return a date offseted by the number of days specified by the parameter _offset
    function getOffestDate(_offset) {
      let _date = new Date();

      _date.setDate(_date.getDate() + _offset);

      return _date;
    }

  });