angular.module('skiTrackerApp')
  .component('startFresh', {
    templateUrl: './modules/start-fresh/start-fresh.html',
    controller: 'startFreshCtrl'
  })

  .controller('startFreshCtrl', function(userDataService) {
    let $ctrl = this;

    // TODO - have modal generated on init here and 

    $ctrl.$onInit = () => {
      console.log('fresh start ctrl inited');
    };

  });