angular.module('skiTrackerApp')
  .component('firstEntryModal', {
    bindings: {
      close: '&'
    },
    templateUrl: './modules/modals/first-entry-modal/first-entry-modal.template.html',
    controller: 'firstEntryModalCtrl'
  })

  .controller('firstEntryModalCtrl', function($scope) {
    $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.timeChanged = false;  // used for ng-class for displayed timer
      $ctrl.timeLeft = 5;         // time left before redirect, val is displayed in timer

      // start countdown to redirect
      deductOneSecond();
    };


    /**
     * Deducts one second from timer and adds class to timer div.
     * If time is not 0, calls function to remove class (that uses transition) and calls itself again.
     * If no time is left, adds entry obj to user data (which will then display 'entries' view)
     */
    function deductOneSecond() {
      setTimeout(() => {
        // remove second and add class to timer div
        --$ctrl.timeLeft;
        $ctrl.timeChanged = true;
        $scope.$apply();

        if ($ctrl.timeLeft > 0) {
          toggleFlash();
          deductOneSecond();
        } else {
          closeModal();
        }
      }, 1000);
    }

    // removes class from timer div
    function toggleFlash() {
      setTimeout(() => {
        $ctrl.timeChanged = false;
        $scope.$apply();
      }, 200);
    }

    // close modal (parent component adds entry on modal close)
    function closeModal() {
      setTimeout(() => $ctrl.close(), 300);
    }

  });