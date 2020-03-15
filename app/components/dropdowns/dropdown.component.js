angular.module('skiTrackerApp')
  .component('dropdown', {
    templateUrl: './components/dropdowns/dropdown.component.html',
    controller: 'dropdownCtrl',
    bindings: {
      dropdownType: '@',
      defaultVal: '@',
      optionsArr: '<',
      onItemSelect: '&onItemSelect'
    }
  })

  .controller('dropdownCtrl', function($scope, $element, $document) {
    let $ctrl = this;

    // init vars
    $ctrl.$onInit = () => {
      $ctrl.selectModel = null;       // binded to input field
      $ctrl.selectedOptions = null;   // selected items for multiselect dropdown
      $ctrl.isToggled = false;        // boolean used to display or hide options (used for ng-class)

      // set vars for dropdown type
      if ($ctrl.dropdownType === 'simple') {
        $ctrl.optionsArr.unshift(!!$ctrl.defaultVal ? $ctrl.defaultVal : '-- select --');
      } else {
        $ctrl.optionsArr.unshift(!!$ctrl.defaultVal ? $ctrl.defaultVal : 'Select Options');
        $ctrl.selectedOptions = [];
      }

      // set init value for input field
      $ctrl.selectModel = $ctrl.optionsArr[0];
    };

    // init listeners
    $ctrl.$postLink = () => {
      // hide dropdown when user clicks outside of this dropdown
      $document.on('click', (event) => {
        if (!$element[0].contains(event.target)) {
          $ctrl.isToggled = false;
          $scope.$apply();
        }
      });
    };


    // toggle dropdown
    $ctrl.toggleDropdown = () => $ctrl.isToggled = !$ctrl.isToggled;

    // add or remove an item from $ctrl.selectedOptions (used for multiselect dropdown)
    $ctrl.addRemoveItem = (_item) => {
      let _itemIndex = $ctrl.selectedOptions.indexOf(_item);

      // remove or push the item to $ctrl.selectedOptions
      _itemIndex > -1 ? $ctrl.selectedOptions.splice(_itemIndex, 1) : $ctrl.selectedOptions.push(_item);

      $ctrl.onItemSelect({_value: $ctrl.selectedOptions});
    };

    /**
     * Passes the item selected by the user to the parent component's onItemSelect() callback function.
     * 
     * @param {<any>} _item The item selected from the dropdown by the user
     */
    $ctrl.itemSelectedSimple = (_item) => {
      $ctrl.selectModel = _item;
      $ctrl.toggleDropdown();

      // pass an empty string if user selected the default val, else pass _item to parent component callback function
      $ctrl.onItemSelect({_value: (_item === $ctrl.optionsArr[0] ? '' : _item)});
    };
  });