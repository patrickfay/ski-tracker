angular.module('skiTrackerApp')
  .component('newEntryModal', {
    bindings: {
      close: '&'
    },
    templateUrl: './modules/modals/new-entry-modal/new-entry-modal.template.html',
    controller: 'newEntryModalCtrl'
  })

  .controller('newEntryModalCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in new entry modal component');
    };
  });