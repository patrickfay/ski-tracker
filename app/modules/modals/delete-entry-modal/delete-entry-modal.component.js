angular.module('skiTrackerApp')
  .component('deleteEntryModal', {
    bindings: {
      close: '&'
    },
    templateUrl: './modules/modals/delete-entry-modal/delete-entry-modal.template.html'
  });