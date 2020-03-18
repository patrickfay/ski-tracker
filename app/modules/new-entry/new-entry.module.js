angular.module('skiTrackerApp')
  .component('newEntry', {
    templateUrl: './modules/new-entry/new-entry.module.html',
    controller: 'newEntryCtrl',
  })

  .controller('newEntryCtrl', function(userDataService, skiAreaService) {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      // init vars needed for input fields
      $ctrl.date = new Date();
      $ctrl.skiAreasNames = skiAreaService.getAllSkiAreasNames();
      $ctrl.userSkiPartners = userDataService.getSkiPartners();

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

    /**
     * Add a new skier to the userDataService and update $ctrl.skiedWith
     * We want to store all user data in our userDataService, so we add and update user data  in this function.
     * 
     * @param {string} _newItem The name of a new ski partner
     */
    $ctrl.addSkiedWith = (_newItem) => {
      userDataService.addSkiPartner(_newItem);
      $ctrl.userSkiPartners = userDataService.getSkiPartners();
    };

    $ctrl.createNewEntry = () => {
      console.log('oh boy, here I go creating entries again');
    };
  });