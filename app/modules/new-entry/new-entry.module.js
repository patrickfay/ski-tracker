angular.module('skiTrackerApp')
  .component('newEntry', {
    templateUrl: './modules/new-entry/new-entry.module.html',
    controller: 'newEntryCtrl',
  })

  .controller('newEntryCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in new-entry component');
    };
  });