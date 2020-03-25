angular.module('skiTrackerApp')
  .service('userDataService', function() {
    let $service = this;  // so we don't confuse 'this' w/ scopes across functions and service module

    // this var is used to hold the user's data across the application
    $service.userData = {
      entries: [],
      skiPartners: []
    };


    /**
     * Set userData.entries to an array of ski entries.
     * This function sets ALL entries to the parameter passed to this function.
     * This function should only be called when to add data uploaded by the user.
     * 
     * @param {array<entry>} _entries An array of ski day entries.
     */
    $service.setEntries = (_entries) => {
      $service.userData.entries = _entries;
    };

    /**
     * Add a new ski partner to userData.skiPartners.
     * If the ski partner being added is already in userData.skiPartners, do not add the ski partner.
     * 
     * @param {string} _partnerName The name of a ski partner.
     */
    $service.addSkiPartner = (_partnerName) => {
      if (!$service.userData.skiPartners.includes(_partnerName)) {
        $service.userData.skiPartners.unshift(_partnerName);
      }
    };

    /**
     * Add a new ski entry to userData.entries.
     * This function adds a NEW ski entry to the user's array fo entries.
     * This function should only be called when the user has manually entered data for a new entry (likely using the 'input-entry' component)
     * 
     * @param {entry} _entry An entry for a ski day.
     */
    $service.addEntry = (_entry) => {
      $service.userData.entries.unshift(_entry);
    };

    /**
     * Get all of the user's ski entries.
     * 
     * @returns {array<entry>} An array of all the user's ski entries.
     */
    $service.getEntries = () => {
      return $service.userData.entries;
    };

    /**
     * Get all of the user's ski partners
     * 
     * @returns {array<string>} An array of all the names of the user's ski partners.
     */
    $service.getSkiPartners = () => {
      return $service.userData.skiPartners;
    };

    /**
     * Clear all of the user's ski data.
     * PLEASE ensure to add an alert asking the user if they are sure they would like to do this.
     */
    $service.clearData = () => {
      $service.userData.entries = [];
      $service.userData.skiPartners = [];
    };
  });