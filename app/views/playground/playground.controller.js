angular.module('skiTrackerApp')
  .controller('playgroundCtrl', function($scope) {

    $scope.datepicker = {
      value: null,
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
      console.log('value:', _value);
    };

  });