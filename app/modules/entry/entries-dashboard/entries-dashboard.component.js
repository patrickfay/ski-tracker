angular.module('skiTrackerApp')
  .component('entriesDashboard', {
    templateUrl: './modules/entry/entries-dashboard/entries-dashboard.component.html',
    controller: 'entriesDashboardCtrl',
  })

  .controller('entriesDashboardCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('entries dashboard init');
    };
    
  });