angular.module('skiTrackerApp')
  .controller('startFreshCtrl', function($scope, $uibModal, userDataService) {

    /**
     * Toggle a modal that displays success msg then handles newly created entry.
     * 
     * @param {entry} _entry The entry created by the user.
     */
    $scope.onFirstEntryCreated = (_entry) => {
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