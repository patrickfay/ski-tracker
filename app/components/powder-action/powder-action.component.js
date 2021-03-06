angular.module('skiTrackerApp')
  .component('powderAction', {
    templateUrl: './components/powder-action/powder-action.component.html',
    bindings: {
      val: '@',       // value of btn in template
      msg: '@',       // msg to display
      className: '@'  // class of btn in template
    },
    controller: 'powderActionController'
  })

  .controller('powderActionController', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('inited powderAction', 'woohoo!!', 'lordy');
      console.log('yaboo!!');
      console.log($ctrl.val, $ctrl.msg, $ctrl.className);

      $ctrl.showMsg = false;
    };

    // update var used to display/hide msg in template
    $ctrl.toggleMsg = () => $ctrl.showMsg = !$ctrl.showMsg;

  });