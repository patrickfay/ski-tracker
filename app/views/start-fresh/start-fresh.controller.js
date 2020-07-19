angular.module('skiTrackerApp')
  .controller('startFreshCtrl', function($scope, $location, $uibModal, userDataService) {

    /**
     * Toggle a modal that displays success msg then handles newly created entry.
     * 
     * @param {entry} _entry The entry created by the user.
     */
    $scope.onFirstEntryCreated = (_entry) => {
      // add new entry to userDataService
      userDataService.addEntry(_entry);

      // open first-entry-modal
      let _modalInstance = $uibModal.open({
        component: 'firstEntryModal',
        size: 'lg',
        backdrop: 'static'
      });

      // on modal close redirect to entries dashboard
      _modalInstance.result
        .then(() => $location.url('entries-dashboard'));
    };
  });