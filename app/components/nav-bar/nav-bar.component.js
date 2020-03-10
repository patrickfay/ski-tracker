angular.module('skiTrackerApp')
  .component('navBar', {
    templateUrl: './components/nav-bar/nav-bar.component.html',
    controller: 'navBarCtrl'
  })

  .controller('navBarCtrl', function($location) {
    let $ctrl = this;

    // route the user to the specified path using the $location service
    $ctrl.routeTo = (_path) => $location.url(_path);

  });