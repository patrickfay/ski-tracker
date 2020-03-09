angular.module('skiTrackerApp')
  .component('dropdownSimple', {
    templateUrl: './components/dropdown-simple/dropdown-simple.component.html',
    controller: 'dropdownSimpleCtrl',
    bindings: {
      defaultVal: '@',
      optionsArr: '<',
      itemSelect: '&onItemSelect'
    }
  })

  .controller('dropdownSimpleCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in dropdown simple component');
      $ctrl.isToggled = false;

      // push default value to options array on init
      $ctrl.optionsArr.unshift(!!$ctrl.defaultVal ? $ctrl.defaultVal : '-- select --');
  
      // set model for select to first arr ele
      $ctrl.selectModel = $ctrl.optionsArr[1];
    };

    // $ctrl.isToggled = false;

    // // push default value to options array on init
    // $ctrl.optionsArr.unshift(!!$ctrl.defaultVal ? $ctrl.defaultVal : '-- select --');

    // // set model for select to first arr ele
    // $ctrl.selectModel = $ctrl.optionsArr[0];

    // toggle dropdown
    $ctrl.toggleDropdown = () => $ctrl.isToggled = !$ctrl.isToggled;

  });