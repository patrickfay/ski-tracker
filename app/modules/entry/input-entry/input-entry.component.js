angular.module('skiTrackerApp')
  .component('inputEntry', {
    bindings: {
      entryObj: '<',
      onEntryGenerated: '&'
    },
    templateUrl: './modules/entry/input-entry/input-entry.component.html',
    controller: 'inputEntryCtrl',
  })

  .controller('inputEntryCtrl', function($scope, userDataService, skiAreaService) {
    let $ctrl = this;
    $ctrl.skiAreasNames = null;
    $ctrl.userSkiPartners = null;
    $ctrl.invalidInputFields = null;
    $ctrl.currDate = null;

    $ctrl.$onInit = () => {
      // get user and ski area data
      $ctrl.skiAreasNames = skiAreaService.getAllSkiAreasNames();
      $ctrl.userSkiPartners = userDataService.getSkiPartners();
      
      $ctrl.invalidInputFields = [];  // used w/ ng-class to alert user of invalid input
      $ctrl.currDate = new Date();    // used to set max-date for datepicker

      // if an entry object was not passed to the component, set $ctrl.entryObj to empty entry object
      if ($ctrl.entryObj === undefined) {
        $ctrl.entryObj = {
          date: new Date(),     // binded to date input field
          day: null,            // needed for an entry object, this value is not updated/used in this component
          description: null,    // binded to description text area field
          skiArea: null,        // binded to ski area dropdown
          skiedWith: null,      // binded to skied with dropdown
          stats: {
            skiVert: null,      // binded to ski vertical text input field
            maxAlt: null,       // binded to max altitude text input field
            skiDist: null,      // binded to ski distance text input field
            maxSpeed: null      // binded to top speed text input field
          }
        };
      }
    };


    /**
     * Listen for the generateEntryObject $broadcast from the parent component and pass the current
     * entry object to the parent component's callback function.
     */
    $scope.$on('generateEntryObject', () => {
      if (isValidEntry()) $ctrl.onEntryGenerated({_entry: $ctrl.entryObj});
    });


    // set date when new date selected
    $ctrl.setDate = (_value) => $ctrl.entryObj.date = _value;

    // set skied with when skiers are selected
    $ctrl.setSkiedWith = (_value) => $ctrl.entryObj.skiedWith = _value;

    // set value of ski area and reset invalidInput var
    $ctrl.setSkiArea = (_value) => {
      $ctrl.entryObj.skiArea = skiAreaService.getSkiAreaByName(_value)
      $ctrl.removeInvalid('skiArea');
    };

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
     * Remove an input field name from $ctrl.invalidInputFields.
     * 
     * @param {string} _fieldName the name of an input field
     */
    $ctrl.removeInvalid = (_fieldName) => {
      let _index = $ctrl.invalidInputFields.indexOf(_fieldName);
      if (_index > -1) $ctrl.invalidInputFields.splice(_index, 1);
    };

    /**
     * Returns true if user's input is valid for entry creation, else returns false.
     * $ctrl.invalidInputFields uses ng-class to alert the user of invalid input in template
     * 
     * @returns {boolean} true if user's input is valid for entry creation, else false.
     */
    function isValidEntry() {
      if ($ctrl.entryObj.skiArea === null) $ctrl.invalidInputFields.push('skiArea');
      if (isTruthyAndNan($ctrl.entryObj.stats.skiVert)) $ctrl.invalidInputFields.push('skiVert');
      if (isTruthyAndNan($ctrl.entryObj.stats.maxAlt)) $ctrl.invalidInputFields.push('maxAlt');
      if (isTruthyAndNan($ctrl.entryObj.stats.skiDist)) $ctrl.invalidInputFields.push('skiDist');
      if (isTruthyAndNan($ctrl.entryObj.stats.maxSpeed)) $ctrl.invalidInputFields.push('maxSpeed');

      return $ctrl.invalidInputFields.length === 0;
    }

    /**
     * Returns true if the passed value has a value (is truth) AND the value is NOT a number.
     * Else returns false if the passed value no value (is falsy) OR is a number.
     * 
     * @param {<any>} _val the value of a text input field
     * @returns true if _val is falsy OR _val is a number. Else returns false.
     */
    function isTruthyAndNan(_val) {
      return (!!_val && isNaN(_val));
    }
  });