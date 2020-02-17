(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// create app module
angular.module('skiTrackerApp', ['ngRoute']);

// import all other modules
require('./app.router');
require('./components/components.module');
require('./views/views.module');
},{"./app.router":2,"./components/components.module":3,"./views/views.module":7}],2:[function(require,module,exports){
angular.module('skiTrackerApp')
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});

    $routeProvider
      .when('/view1', {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'views/view2/view2.html',
        controller: 'View2Ctrl'
      })
  }]);
},{}],3:[function(require,module,exports){
// import all components
require('./powder-action/powder-action.component');
},{"./powder-action/powder-action.component":4}],4:[function(require,module,exports){
angular.module('skiTrackerApp').component('powderAction', {

  templateUrl: './components/powder-action/powder-action.component.html',
  bindings: {
    val: '@',       // value of btn in template
    msg: '@',       // msg to display
    className: '@'  // class of btn in template
  },
  controller: 'powderActionController'
})

.controller('powderActionController', [function() {
  let $ctrl = this;


  $ctrl.$onInit = () => {
    console.log('inited powderAction');
    console.log($ctrl.val, $ctrl.msg, $ctrl.className);

    $ctrl.showMsg = false;
  };

  // update var used to display/hide msg in template
  $ctrl.toggleMsg = () => $ctrl.showMsg = !$ctrl.showMsg;

}]);
},{}],5:[function(require,module,exports){
angular.module('skiTrackerApp').controller('View1Ctrl', ['$scope', function($scope) {

  $scope.value = 'I am your value dude';
  $scope.message = 'msg? How about a tip? get a job there bud';
  $scope.powderBtnClass = 'st-btn-powder-woohoo';
  
}]);
},{}],6:[function(require,module,exports){
angular.module('skiTrackerApp').controller('View2Ctrl', ['$scope', function($scope) {

  $scope.testArr = ['yoooo', 'ayoo', 'sgood?', 'aight den'];
  
  // used to pass to powder action component
  $scope.pwdrBtnVal = 'Randy Man';
  $scope.pwdrMsg = 'Frig off Mr. Lahey!!';
  $scope.pwdrBtnClass = 'st-btn-powder-woohoo';

}]);
},{}],7:[function(require,module,exports){
// import all views
require('./view1/view1');
require('./view2/view2');
},{"./view1/view1":5,"./view2/view2":6}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLm1vZHVsZS5qcyIsImFwcC9hcHAucm91dGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUuanMiLCJhcHAvY29tcG9uZW50cy9wb3dkZXItYWN0aW9uL3Bvd2Rlci1hY3Rpb24uY29tcG9uZW50LmpzIiwiYXBwL3ZpZXdzL3ZpZXcxL3ZpZXcxLmpzIiwiYXBwL3ZpZXdzL3ZpZXcyL3ZpZXcyLmpzIiwiYXBwL3ZpZXdzL3ZpZXdzLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuLy8gY3JlYXRlIGFwcCBtb2R1bGVcbmFuZ3VsYXIubW9kdWxlKCdza2lUcmFja2VyQXBwJywgWyduZ1JvdXRlJ10pO1xuXG4vLyBpbXBvcnQgYWxsIG90aGVyIG1vZHVsZXNcbnJlcXVpcmUoJy4vYXBwLnJvdXRlcicpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlJyk7XG5yZXF1aXJlKCcuL3ZpZXdzL3ZpZXdzLm1vZHVsZScpOyIsImFuZ3VsYXIubW9kdWxlKCdza2lUcmFja2VyQXBwJylcbiAgLmNvbmZpZyhbJyRsb2NhdGlvblByb3ZpZGVyJywgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJGxvY2F0aW9uUHJvdmlkZXIsICRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJGxvY2F0aW9uUHJvdmlkZXIuaGFzaFByZWZpeCgnIScpO1xuXG4gICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHtyZWRpcmVjdFRvOiAnL3ZpZXcxJ30pO1xuXG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvdmlldzEnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdmlldzEvdmlldzEuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdWaWV3MUN0cmwnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy92aWV3MicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy92aWV3Mi92aWV3Mi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1ZpZXcyQ3RybCdcbiAgICAgIH0pXG4gIH1dKTsiLCIvLyBpbXBvcnQgYWxsIGNvbXBvbmVudHNcbnJlcXVpcmUoJy4vcG93ZGVyLWFjdGlvbi9wb3dkZXItYWN0aW9uLmNvbXBvbmVudCcpOyIsImFuZ3VsYXIubW9kdWxlKCdza2lUcmFja2VyQXBwJykuY29tcG9uZW50KCdwb3dkZXJBY3Rpb24nLCB7XG5cbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvcG93ZGVyLWFjdGlvbi9wb3dkZXItYWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgYmluZGluZ3M6IHtcbiAgICB2YWw6ICdAJywgICAgICAgLy8gdmFsdWUgb2YgYnRuIGluIHRlbXBsYXRlXG4gICAgbXNnOiAnQCcsICAgICAgIC8vIG1zZyB0byBkaXNwbGF5XG4gICAgY2xhc3NOYW1lOiAnQCcgIC8vIGNsYXNzIG9mIGJ0biBpbiB0ZW1wbGF0ZVxuICB9LFxuICBjb250cm9sbGVyOiAncG93ZGVyQWN0aW9uQ29udHJvbGxlcidcbn0pXG5cbi5jb250cm9sbGVyKCdwb3dkZXJBY3Rpb25Db250cm9sbGVyJywgW2Z1bmN0aW9uKCkge1xuICBsZXQgJGN0cmwgPSB0aGlzO1xuXG5cbiAgJGN0cmwuJG9uSW5pdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW5pdGVkIHBvd2RlckFjdGlvbicpO1xuICAgIGNvbnNvbGUubG9nKCRjdHJsLnZhbCwgJGN0cmwubXNnLCAkY3RybC5jbGFzc05hbWUpO1xuXG4gICAgJGN0cmwuc2hvd01zZyA9IGZhbHNlO1xuICB9O1xuXG4gIC8vIHVwZGF0ZSB2YXIgdXNlZCB0byBkaXNwbGF5L2hpZGUgbXNnIGluIHRlbXBsYXRlXG4gICRjdHJsLnRvZ2dsZU1zZyA9ICgpID0+ICRjdHJsLnNob3dNc2cgPSAhJGN0cmwuc2hvd01zZztcblxufV0pOyIsImFuZ3VsYXIubW9kdWxlKCdza2lUcmFja2VyQXBwJykuY29udHJvbGxlcignVmlldzFDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAkc2NvcGUudmFsdWUgPSAnSSBhbSB5b3VyIHZhbHVlIGR1ZGUnO1xuICAkc2NvcGUubWVzc2FnZSA9ICdtc2c/IEhvdyBhYm91dCBhIHRpcD8gZ2V0IGEgam9iIHRoZXJlIGJ1ZCc7XG4gICRzY29wZS5wb3dkZXJCdG5DbGFzcyA9ICdzdC1idG4tcG93ZGVyLXdvb2hvbyc7XG4gIFxufV0pOyIsImFuZ3VsYXIubW9kdWxlKCdza2lUcmFja2VyQXBwJykuY29udHJvbGxlcignVmlldzJDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAkc2NvcGUudGVzdEFyciA9IFsneW9vb28nLCAnYXlvbycsICdzZ29vZD8nLCAnYWlnaHQgZGVuJ107XG4gIFxuICAvLyB1c2VkIHRvIHBhc3MgdG8gcG93ZGVyIGFjdGlvbiBjb21wb25lbnRcbiAgJHNjb3BlLnB3ZHJCdG5WYWwgPSAnUmFuZHkgTWFuJztcbiAgJHNjb3BlLnB3ZHJNc2cgPSAnRnJpZyBvZmYgTXIuIExhaGV5ISEnO1xuICAkc2NvcGUucHdkckJ0bkNsYXNzID0gJ3N0LWJ0bi1wb3dkZXItd29vaG9vJztcblxufV0pOyIsIi8vIGltcG9ydCBhbGwgdmlld3NcbnJlcXVpcmUoJy4vdmlldzEvdmlldzEnKTtcbnJlcXVpcmUoJy4vdmlldzIvdmlldzInKTsiXX0=
