angular.module('skiTrackerApp')
  .component('calendar', {
    bindings: {
      date: '<'
    },
    templateUrl: './components/calendar/calendar.component.html',
    controller: 'calendarCtrl'
  })

  .controller('calendarCtrl', function() {
    let $ctrl = this;
    $ctrl.options = null;
    $ctrl.maxDate = null;
    $ctrl.minDate = null;

    $ctrl.$onInit = () => {
      $ctrl.maxDate = new Date();
      $ctrl.minDate = new Date();

      // set min and max date to make all dates in datepicker 'out of range'
      $ctrl.maxDate.setTime($ctrl.date.getTime());
      $ctrl.minDate.setTime($ctrl.date.getTime());
      $ctrl.maxDate.setDate($ctrl.date.getDate() - 1);
      $ctrl.minDate.setDate($ctrl.date.getDate() + 1);

      $ctrl.options = {
        datepickerMode: 'day',
        formatDay: 'd',
        maxDate: $ctrl.date,
        minDate: $ctrl.date,
        showWeeks: false
      };
    };
  });