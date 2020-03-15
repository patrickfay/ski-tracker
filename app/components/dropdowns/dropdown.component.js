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

    $ctrl.$onInit = () => {
      $ctrl.isToggled = false;
      $ctrl.selectedOptions = null;


      if ($ctrl.dropdownType === 'simple') {
        $ctrl.optionsArr.unshift(!!$ctrl.defaultVal ? $ctrl.defaultVal : '-- select --');
      } else {
        $ctrl.optionsArr.unshift('-- select options --');
        $ctrl.selectedOptions = [];
      }
  
      $ctrl.selectModel = $ctrl.optionsArr[0];
    };

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
    };

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