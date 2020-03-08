angular.module('skiTrackerApp')
  .controller('playgroundCtrl', function($scope) {

    $scope.datepicker = {
      date: new Date(),
      format: 'MM/dd/yyyy',
    };

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

  });