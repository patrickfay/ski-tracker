angular.module('skiTrackerApp')
  .component('startFresh', {
    templateUrl: './modules/start-fresh/start-fresh.module.html',
    controller: 'startFreshCtrl'
  })

  .controller('startFreshCtrl', function($scope, $uibModal, userDataService) {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('fresh start ctrl inited');
    };

    /**
     * Toggle a modal that displays success msg then handles newly created entry.
     * 
     * @param {entry} _entry The entry created by the user.
     */
    $ctrl.onFirstEntryCreated = (_entry) => {
      $uibModal.open({
        component: 'firstEntryModal',
        size: 'lg',
        resolve: {
          entry: _entry
        }
      });
    };
  });


// import all other components needed for this module
require('./components/first-entry-modal/first-entry-modal.controller');