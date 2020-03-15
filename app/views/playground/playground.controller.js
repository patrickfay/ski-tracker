angular.module('skiTrackerApp')
  .controller('playgroundCtrl', function($scope) {

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

    $scope.printSelectedVal = (_value) => console.log('selected dropdown value(s):', _value);

    $scope.dateChanged = (_value) => console.log('selected date:', _value);

    // return a date offseted by the number of days specified by the parameter _offset
    function getOffestDate(_offset) {
      let _date = new Date();

      _date.setDate(_date.getDate() + _offset);

      return _date;
    }

  });