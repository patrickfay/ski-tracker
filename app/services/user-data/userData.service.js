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
     * This function should only be called when the user has manually entered data for a new entry (likely using the 'input-entry' component)
     * Each entry must have a unique date.
     * 
     * @param {entry} _entry An entry for a ski day.
     * @returns {boolean} true if a new entry was successfully added to user data, else returns false.
     */
    $service.addEntry = (_entry) => {
      let _entryAdded = false;

      // each entry must have a unique date
      if ($service.getEntryByDate(_entry.date) === null) {
        $service.userData.entries.unshift(_entry);
        _entryAdded = true;
      }

      return _entryAdded;
    };

    /**
     * Return an entry object who's date equal to the date passed as a parameter.
     * We use dates as a unique identifier for entries. If no date matches the parameter return null
     * 
     * @param {Date} _date A date object.
     * @returns {entry} An entry with the same date as _date. If no dates match, return null.
     */
    $service.getEntryByDate = (_date) => {
      let _allEntries = $service.getAllEntries();

      // iterate over all entries and return entry obj if it's date is same as param
      for (let i = 0; i < _allEntries.length; i++) {
        if (_allEntries[i].date.getTime() === _date.getTime()) {
          return _allEntries[i];
        }
      }

      return null;
    };

    /**
     * Get all of the user's ski entries.
     * 
     * @returns {array<entry>} An array of all the user's ski entries.
     */
    $service.getAllEntries = () => {
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