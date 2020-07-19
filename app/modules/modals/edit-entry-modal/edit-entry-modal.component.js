angular.module('skiTrackerApp')
  .component('editEntryModal', {
    bindings: {
      resolve: '<',
      close: '&'
    },
    templateUrl: './modules/modals/edit-entry-modal/edit-entry-modal.template.html',
    controller: 'editEntryModalCtrl'
  })
  
  .controller('editEntryModalCtrl', function() {
    $ctrl = this;

    // return the entry object from the <input-entry> component and close the modal
    $ctrl.returnEntryObj = (_entry) => $ctrl.close({$value: _entry});
  });