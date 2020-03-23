angular.module('skiTrackerApp')
  .component('dropdown', {
    templateUrl: './components/dropdowns/dropdown.component.html',
    controller: 'dropdownCtrl',
    bindings: {
      dropdownType: '@',
      defaultVal: '@',
      optionsArr: '<',
      addNewAllowed: '<',
      onItemSelect: '&onItemSelect',
      onNewItemAdded: '&onNewItemAdded'
    }
  })

  .controller('dropdownCtrl', function($scope, $element, $document) {
    let $ctrl = this;

    // init vars
    $ctrl.$onInit = () => {
      $ctrl.selectModel = null;       // binded to dropdown input field
      $ctrl.selectedOptions = null;   // selected items for multiselect dropdown
      $ctrl.newOption = null;         // binded to new option input field within multiselect dropdown
      $ctrl.isToggled = false;        // boolean used to display or hide options (used for ng-class)

      // set vars for dropdown type
      if ($ctrl.dropdownType === 'simple') {
        // add default val to options and set selectModel to default val
        $ctrl.optionsArr.unshift(!!$ctrl.defaultVal ? $ctrl.defaultVal : '-- select --');
        $ctrl.selectModel = $ctrl.optionsArr[0];
      } else if ($ctrl.dropdownType === 'multiselect') {
        // set selectModel to defalut val and set selectedOptions to empty arr
        $ctrl.selectModel = !!$ctrl.defaultVal ? $ctrl.defaultVal : 'Select Options';
        $ctrl.selectedOptions = [];
      } else {
        console.error("No dropdown type identified! Please read the dropdown component's README to understand how to use this component");
      }
    };

    // init listeners
    $ctrl.$postLink = () => {
      // hide dropdown when user clicks outside of this component
      $document.on('click', (event) => {
        if (!$element[0].contains(event.target)) {
          $ctrl.isToggled = false;
          $scope.$apply();
        }
      });
    };


    // toggle dropdown
    $ctrl.toggleDropdown = () => $ctrl.isToggled = !$ctrl.isToggled;

    /**
     * add or remove an item from $ctrl.selectedOptions (used for multiselect dropdown). Also passes the selected items to the parent component callback function
     * 
     * @param {<any>} _item The item selected from the dropdown by the user
     */
    $ctrl.addRemoveItem = (_item) => {
      let _itemIndex = $ctrl.selectedOptions.indexOf(_item);

      // remove or push the item to $ctrl.selectedOptions
      _itemIndex > -1 ? $ctrl.selectedOptions.splice(_itemIndex, 1) : $ctrl.selectedOptions.push(_item);

      // pass all selected items to the parent component
      $ctrl.onItemSelect({_value: $ctrl.selectedOptions});
    };

    /**
     * Passes the item selected by the user in the SIMPLE dropdown to the parent component's onItemSelect() callback function.
     * 
     * @param {<any>} _item The item selected from the dropdown by the user
     */
    $ctrl.itemSelectedSimple = (_item) => {
      $ctrl.selectModel = _item;
      $ctrl.toggleDropdown();

      // pass an empty string if user selected the default val, else pass _item to parent component callback function
      $ctrl.onItemSelect({_value: (_item === $ctrl.optionsArr[0] ? '' : _item)});
    };

    /**
     * Focuses the text input field for 'Add New'. This function is called when the user clicks the green '+' icon next to the text input field
     * If this component is displaying the multiselect input field, there will only be 2 input fields in $element.
     * The second input field in $element will be the 'add new' text input field
     */
    $ctrl.focusAddNew = () => angular.element($element).find('input')[1].focus();

    /**
     * Passes a new item the user added to the multiselect dropdown options to the parent component.
     * The parent component is responsible for updating the options passed to this component.
     * Add the added item to the selectedOptions arr.
     */
    $ctrl.addNewItemToOptions = () => {
      // if the user entered a value 
      if (!!$ctrl.newOption) {
        $ctrl.onNewItemAdded({_newItem: $ctrl.newOption});
        $ctrl.addRemoveItem($ctrl.newOption);
        $ctrl.newOption = null;
      }
    };
  });