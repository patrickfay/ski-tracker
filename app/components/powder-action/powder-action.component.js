angular.module('powder-action', ['ngRoute'])

.component('powder-action', {
  template: './components/powder-action/powder-action.html',
  // template: 'powder-action.component.html',
  // bindings: {
  //   val: '@',
  //   msg: '@',
  //   class: '@'
  // },
  controller: 'powderActionController'
})

// .controller('powder-action-controller', ['$scope', function($scope) {

.controller('powderActionController', [function() {
  let $ctrl = this;

  $ctrl.$onInit = () => {
    // console.log('inited dawg', $ctrl.val, $ctrl.msg, $ctrl.style);
    console.log('inited dawg');
  }

  console.log('sooo...');

}]);

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/powder-action', {
//     templateUrl: 'components/powder-action/powder-action.html',
//     controller: 'powder-action'
//   });
// }])