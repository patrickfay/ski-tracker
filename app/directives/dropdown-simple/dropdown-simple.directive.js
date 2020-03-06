angular.module('skiTrackerApp')

  .directive('dropdownSimple', function() {
    return {
      transclude: true,
      scope: {
        // selectItem: '&onSelect'
      },
      templateUrl: './directives/dropdown-simple/dropdown-simple.directive.html',
      link: function() {

      }
    };
  });