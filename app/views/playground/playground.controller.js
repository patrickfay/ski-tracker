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

    $scope.printSelectedVal = (_value) => console.log('selected dropdown value:', _value);

    $scope.dateChanged = (_value) => console.log('selected date:', _value);

    // return a date offseted by the number of days specified by the parameter _offset
    function getOffestDate(_offset) {
      let _date = new Date();

      _date.setDate(_date.getDate() + _offset);

      return _date;
    }

  });