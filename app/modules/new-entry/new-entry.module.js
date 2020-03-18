angular.module('skiTrackerApp')
  .component('newEntry', {
    bindings: {
      onEntryCreation: '&onEntryCreation'
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

      // used w/ ng-class to alert user of invalid input
      $ctrl.invalidInput = false;
    };


    // set values when custom input field values change
    $ctrl.setDate = (_value) => $ctrl.date = _value;
    $ctrl.setSkiedWith = (_value) => $ctrl.entryObj.skiedWith = _value;

    // set value of ski area and reset invalidInput var
    $ctrl.setSkiArea = (_value) => {
      $ctrl.entryObj.skiArea = _value;
      $ctrl.invalidInput = false;
    }

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

    /**
     * Create a new Entry object and pass it to the parent component.
     * We check for valid input before passing the Entry object to the parent.
     */
    $ctrl.createNewEntry = () => {
      // get ski area obj using ski are name
      $ctrl.entryObj.skiArea = skiAreaService.getSkiAreaByName($ctrl.entryObj.skiArea);

      // if the user entered valid input, pass entry obj to parent component
      if (isValidEntry()) $ctrl.onEntryCreation({_entry: $ctrl.entryObj});
    };


    /**
     * Returns true if user's input is valid for entry creation, else returns false.
     * Also uses $ctrl.invalidInput along with ng-class to alert user of invalid input in template
     * 
     * @returns {boolean} true if user's input is valid for entry creation, else false.
     */
    function isValidEntry() {
      if (!!$ctrl.entryObj.date && !!$ctrl.entryObj.skiArea) return true;
      
      $ctrl.invalidInput = true;
      return false;
    }
  });