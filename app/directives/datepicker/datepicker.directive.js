angular.module('skiTrackerApp')

  .directive('datepicker', function() {
    return {
      restrict: 'E',
      scope: {
        format: '@',
        dateSelect: '&onDateSelect'
      },
      templateUrl: './directives/datepicker/datepicker.directive.html',
      link: function(scope) {
        scope.datepickerObj = {
          value: null,
          options: {
            datepickerMode: 'day',
            formatDay: 'd',
            formatMonth: 'MMM',
            showWeeks: false,
            monthColumns: 3,
            yearColumns: 4
          }
        }
      }
    };
  });