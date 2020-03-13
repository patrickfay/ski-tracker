angular.module('skiTrackerApp')
  .component('dropdownMultiselect', {
    templateUrl: './components/dropdowns/multiselect/dropdown-multiselect.component.html',
    controller: 'dropdownMultiselectCtrl',
    bindings: {
      // defaultVal: '@',
      optionsArr: '<',
      onItemSelect: '&onItemSelect'
    }
  })

  .controller('dropdownMultiselectCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in dropdown-multiselect');
      $ctrl.selectedItems = [];
    };

    // toggle dropdown
    $ctrl.toggleDropdown = () => $ctrl.isToggled = !$ctrl.isToggled;

    /**
     * Passes an array of selected items to the parent component's onItemSelect() callback function each time a new item is selected.
     * 
     * @param {<any>} _item The item selected from the dropdown by the user
     */
    $ctrl.itemSelected = (_item) => {
      let _itemIndex = $ctrl.selectedItems.indexOf(_item);

      // if the item already was previously selected by the user, remove it from the selected items array
      if (_itemIndex > -1) {
        console.log('removing item');
        $ctrl.selectedItems.splice(_itemIndex, _itemIndex + 1);
      } else {
        console.log('adding item');
        $ctrl.selectedItems.push(_item);
      }

      console.log($ctrl.selectedItems);

      // pass an empty string if user selected the default val, else pass _item to parent component callback function
      // $ctrl.onItemSelect({_items: $ctrl.selectedItems});
    };
  });