angular.module('skiTrackerApp')
  .component('newEntry', {
    templateUrl: './modules/new-entry/new-entry.module.html',
    controller: 'newEntryCtrl',
  })

  .controller('newEntryCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in new-entry component');

      // init vars needed for input fields
      $ctrl.date = new Date();
      $ctrl.testSkiAreas = ['Alta', 'Brighton', 'Deer Valley', 'Park City', 'Solitude', 'Snowbird'];
      $ctrl.testSkiedWith = ['Rick James', 'Eli Manning', 'John Doe'];

      $ctrl.skiArea = null;       // binded to ski area dropdown
      $ctrl.skiedWith = null;     // binded to skied with dropdown
      $ctrl.skiVert = null;       // binded to ski vertical text input field
      $ctrl.maxAlt = null;        // binded to max altitude text input field
      $ctrl.skiDist = null;       // binded to ski distance text input field
      $ctrl.topSpeed = null;      // binded to top speed text input field
      $ctrl.description = null;   // binded to description text area field

    };


    $ctrl.setDate = (_value) => $ctrl.date = _value;
    $ctrl.setSkiArea = (_value) => $ctrl.skiArea = _value;
    $ctrl.setSkiedWith = (_value) => $ctrl.skiedWith = _value;
  });