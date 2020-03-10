angular.module('skiTrackerApp')
  .controller('playgroundCtrl', function($scope) {

    $scope.datepicker = {
      date: new Date(),
      format: 'MM/dd/yyyy',
      minDate: getOffestedDate(-2),
      maxDate: getOffestedDate(5)
    };

    console.log($scope.datepicker);

    $scope.dateFormat = 'MM/dd/yyyy';

    $scope.testOptions = [
      'Randy',
      'Lahey',
      'Ricky',
      'Julian',
      'Bubbles',
      'Patrick Schwayze'
    ];

    $scope.printSelectedVal = (_value) => {
      console.log('selected value:', _value);
    };

    // return a date offseted by the number of days specified by the parameter _offset
    function getOffestedDate(_offset) {
      let _date = new Date();

      _date.setDate(_date.getDate() + _offset);

      return _date;
    }

  });