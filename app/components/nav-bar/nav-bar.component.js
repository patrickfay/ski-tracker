angular.module('skiTrackerApp')
  .component('navBar', {
    templateUrl: './components/nav-bar/nav-bar.component.html',
    // bindings: {
    //   val: '@',       // value of btn in template
    //   msg: '@',       // msg to display
    //   className: '@'  // class of btn in template
    // },
    controller: 'navBarCtrl'
  })

  .controller('navBarCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('nav bar here');
    };

  });