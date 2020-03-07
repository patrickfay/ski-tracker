angular.module('skiTrackerApp')

  .directive('dropdownSimple', function() {
    return {
      restrict: 'E',
      scope: {
        defaultVal: '@',
        optionsArr: '<',
        itemSelect: '&onItemSelect'
      },
      templateUrl: './directives/dropdown-simple/dropdown-simple.directive.html',
      link: function(scope) {
        // push default value to options array on init
        scope.optionsArr.unshift(!!scope.defaultVal ? scope.defaultVal : '-- select --');

        // set model for select to first arr ele
        scope.selectModel = scope.optionsArr[0];
      }
    };
  });