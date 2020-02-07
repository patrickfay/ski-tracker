

angular.module('powder-action', ['ngRoute'])


.component('powder-action', {
  template: 'powder-action.component.html',
  bindings: {
    val: '@',
    msg: '@',
    style : '@'
  },
  controller: 'powder-action-controller'
})

.controller('powder-action-controller', ['$scope', function($scope) {

  let $ctrl = this;

  $ctrl.$onInit = () => {
    console.log('inited dawg', $ctrl.val, $ctrl.msg, $ctrl.style);
  }

}]);

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/powder-action', {
//     templateUrl: 'components/powder-action/powder-action.html',
//     controller: 'powder-action'
//   });
// }])