angular.module('skiTrackerApp')
  .controller('playgroundCtrl', function($scope) {

    // cmon, do something...

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