angular.module('skiTrackerApp')
  .component('datepicker', {
    bindings: {
      date: '<',
      format: '@',
      minDate: '<',
      maxDate: '<',
      dateSelect: '&onDateSelect'
      // TODO - date range functionality
    },
    templateUrl: './components/datepicker/datepicker.component.html',
    controller: 'datepickerCtrl'
  })

  .controller('datepickerCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.isOpen = false;

      $ctrl.datepickerObj = {
        value: $ctrl.date,
        options: {
          datepickerMode: 'day',
          formatDay: 'd',
          formatMonth: 'MMM',
          minDate: $ctrl.minDate,
          maxDate: $ctrl.maxDate,
          showWeeks: false,
          monthColumns: 3,
          yearColumns: 4
        }
      };
    };

    // open datepicker
    $ctrl.toggleDatepicker = () => $ctrl.isOpen = true;

  });