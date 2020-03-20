angular.module('skiTrackerApp')
  .component('startFresh', {
    templateUrl: './modules/start-fresh/start-fresh.module.html',
    controller: 'startFreshCtrl'
  })

  .controller('startFreshCtrl', function($uibModal, userDataService) {
    let $ctrl = this;

    /**
     * Toggle a modal that displays success msg then handles newly created entry.
     * 
     * @param {entry} _entry The entry created by the user.
     */
    $ctrl.onFirstEntryCreated = (_entry) => {
      // open first-entry-modal
      let _modalInstance = $uibModal.open({
        component: 'firstEntryModal',
        size: 'lg',
        backdrop: 'static'
      });

      // on modal close, add entry to userDataService
      // this will cause the 'entries' view to display the entries dashboard module
      _modalInstance.result
        .then(() => userDataService.addEntry(_entry));
    };
  });


// import all other components needed for this module
require('./components/first-entry-modal/first-entry-modal.controller');