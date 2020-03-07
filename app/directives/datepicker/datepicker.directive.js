angular.module('skiTrackerApp')

  .directive('datepicker', function() {
    return {
      restrict: 'E',
      scope: {
        format: '@',
        dateSelect: '&onDateSelect'
      },
      templateUrl: './directives/datepicker/datepicker.directive.html',
      link: function(scope, element) {
        scope.isOpen = true;

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

        // open datepicker when user clicks on text input field
        element.on('click', function() {
          scope.isOpen = true;
        });
      }
    };
  });