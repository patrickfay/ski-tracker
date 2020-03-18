angular.module('skiTrackerApp')
  .component('startFresh', {
    templateUrl: './modules/start-fresh/start-fresh.module.html',
    controller: 'startFreshCtrl'
  })

  .controller('startFreshCtrl', function(userDataService) {
    let $ctrl = this;

    // TODO - have modal generated on init here and 

    $ctrl.$onInit = () => {
      console.log('fresh start ctrl inited');
    };

    $ctrl.onFirstEntryCreated = (_entry) => {
      console.log('entry created dawg', _entry);
    };

  });