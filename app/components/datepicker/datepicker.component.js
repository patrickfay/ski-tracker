angular.module('skiTrackerApp')
  .component('datepicker', {
    bindings: {
      date: '<',
      format: '@',
      dateSelect: '&onDateSelect'
      // TODO - date range functionality
    },
    templateUrl: './components/datepicker/datepicker.component.html',
    controller: 'datepickerCtrl'
  })

  .controller('datepickerCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.isOpen = true;

      $ctrl.datepickerObj = {
        value: $ctrl.date,
        options: {
          datepickerMode: 'day',
          formatDay: 'd',
          formatMonth: 'MMM',
          showWeeks: false,
          monthColumns: 3,
          yearColumns: 4
        }
      }
    };

    $ctrl.toggleDatepicker = () => {
      console.log('in toggle datepicker');
      $ctrl.isOpen = true;
    }


  });