angular.module('skiTrackerApp')
  .component('firstEntryModal', {
    bindings: {
      resolve: '<',
      close: '&',
      // dismiss: '&'
    },
    templateUrl: './modules/start-fresh/components/first-entry-modal/first-entry-modal.template.html',
    controller: 'firstEntryModalCtrl'
  })

  .controller('firstEntryModalCtrl', function() {
    console.log('in first entry modal controller yo', 'Yaboo!');
    $ctrl = this;
    // console.log($ctrl);
    // console.log($ctrl.resolve);
    // console.log($ctrl.resolve.items);

    $ctrl.$onInit = () => {
      console.log($ctrl.resolve);
    };

  });