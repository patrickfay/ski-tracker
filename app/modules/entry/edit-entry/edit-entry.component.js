angular.module('skiTrackerApp')
  .component('editEntry', {
    bindings: {
      entry: '<',
    },
    templateUrl: './modules/entry/edit-entry/edit-entry.component.html',
    controller: 'editEntryCtrl',
  })

  .controller('editEntryCtrl', function() {
    $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in edit-entry component', $ctrl.entry);
    };

  });