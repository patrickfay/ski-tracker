angular.module('skiTrackerApp')
  .component('dropdownMultiselect', {
    templateUrl: './components/dropdown-multiselect/dropdown-multiselect.component.html',
    controller: 'dropdownMultiselectCtrl'
  })

  .controller('dropdownMultiselectCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in dropdown-multiselect');
    };

    // toggle dropdown
    // $ctrl.toggleDropdown = () => $ctrl.isToggled = !$ctrl.isToggled;
  });