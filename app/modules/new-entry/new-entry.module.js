angular.module('skiTrackerApp')
  .component('newEntry', {
    bindings: {
      onEntryCreated: '&onEntryCreated'
    },
    templateUrl: './modules/new-entry/new-entry.module.html',
    controller: 'newEntryCtrl',
  })

  .controller('newEntryCtrl', function(userDataService, skiAreaService) {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      // get data needed for input fields
      $ctrl.skiAreasNames = skiAreaService.getAllSkiAreasNames();
      $ctrl.userSkiPartners = userDataService.getSkiPartners();

      // variables binded to input fields
      $ctrl.entryObj = {
        date: new Date(),     // binded to date input field
        skiArea: null,        // binded to ski area dropdown
        skiedWith: null,      // binded to skied with dropdown
        stats: {
          skiVert: null,      // binded to ski vertical text input field
          maxAlt: null,       // binded to max altitude text input field
          skiDist: null,      // binded to ski distance text input field
          topSpeed: null      // binded to top speed text input field
        },
        description: null     // binded to description text area field
      };
    };


    // set values when input field values change
    $ctrl.setDate = (_value) => $ctrl.date = _value;
    $ctrl.setSkiArea = (_value) => $ctrl.entryObj.skiArea = _value;
    $ctrl.setSkiedWith = (_value) => $ctrl.entryObj.skiedWith = _value;

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

      $ctrl.entryObj.skiArea = skiAreaService.getSkiAreaByName($ctrl.entryObj.skiArea);

      console.log($ctrl.entryObj);
      console.log('-------------');
      // $ctrl.onEntryCreated({_value: 'hgfhfhgf'});
    };
  });