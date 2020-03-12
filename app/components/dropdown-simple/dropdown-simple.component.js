angular.module('skiTrackerApp')
  .component('dropdownSimple', {
    templateUrl: './components/dropdown-simple/dropdown-simple.component.html',
    controller: 'dropdownSimpleCtrl',
    bindings: {
      defaultVal: '@',
      optionsArr: '<',
      onItemSelect: '&onItemSelect'
    }
  })

  .controller('dropdownSimpleCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      // push default value to options array on init
      $ctrl.optionsArr.unshift(!!$ctrl.defaultVal ? $ctrl.defaultVal : '-- select --');
  
      $ctrl.selectModel = $ctrl.optionsArr[0];
      $ctrl.isToggled = false;
    };

    // toggle dropdown
    $ctrl.toggleDropdown = () => $ctrl.isToggled = !$ctrl.isToggled;

    /**
     * Passes the item selected by the user to the parent component's onItemSelect() callback function.
     * 
     * @param {<any>} _item The item selected from the dropdown by the user
     */
    $ctrl.itemSelected = (_item) => {
      $ctrl.selectModel = _item;

      // pass an empty string if user selected the default val, else pass _item to parent component callback function
      $ctrl.onItemSelect({_value: (_item === $ctrl.optionsArr[0] ? '' : _item)});
    };
  });