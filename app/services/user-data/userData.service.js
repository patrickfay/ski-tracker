angular.module('skiTrackerApp')
  .service('userDataService', function() {
    let $service = this;  // so we don't confuse 'this' w/ scopes across functions and service module

    // this var is used to hold the user's data across the application
    $service.userData = {
      seasons: [],
      skiPartners: []
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
     * Add a new ski entry to a season.
     * This function should only be called when the user has manually entered data for a new entry (likely using the 'input-entry' component)
     * We must find the correct season for the entry, else create a new season object.
     * Each entry must have a unique date.
     * 
     * @param {entry} _entry An entry for a ski day.
     * @returns {entry} The entry object added. If the entry was not added successfully, return null
     */
    $service.addEntry = (_entry) => {
      let _allSeasons = $service.userData.seasons;

      let _entrySeason = null;    // will hold the season obj that the entry belongs too
      let _addedEntry = null;     // entry added that will be returned at end of function

      // find the season _entry belongs in using dates
      for (let i = 0; i < _allSeasons.length; i++) {
        if (_allSeasons[i].startDate < _entry.date.getTime() && _allSeasons[i].endDate > _entry.date.getTime()) {
          _entrySeason = _allSeasons[i];
          break;
        }
      }

      // if the entry is for a new season, create a new season obj
      if (_entrySeason === null) {
        // push new season obj to _allSeasons and set _entrySeason
        _entrySeason = _allSeasons[_allSeasons.push(createNewSeasonObj(_entry.date)) - 1];
        
        // sort all seasons by year (new to old)
        _allSeasons.sort((a, b) => b.startDate - a.startDate);
      }

      // push entry object to the correct season's entries array (each entry must have a unique date)
      if ($service.getEntryByDate(_entry.date) === null) {
        _entrySeason.entries.push(_entry);
        _addedEntry = _entry;
        setEntriesDays(_entrySeason.entries);
      }

      return _addedEntry;
    };

    /**
     * Clear all of the user's ski data.
     * PLEASE ensure to add an alert asking the user if they are sure they would like to do this.
     */
    $service.clearData = () => {
      $service.userData.seasons = [];
      $service.userData.skiPartners = [];
    };

    /**
     * Returns an array of season objects with sorted entries and other season data.
     */
    $service.getAllSeasons = () => {
      return $service.userData.seasons;
    };

    /**
     * Returns an array of all seasons with entry objs modified to only contain data needed for collapsed entry-list item component.
     * We use this method so we are not constantly storing a large amount of data within the entries-dashboard.
     * We only get all data for an entry when the user wants to see all data for that entry.
     * 
     * @returns {array<simpleEntry>} An array of simpleEntry objects representing all entry objects a user has.
     */
    $service.getAllSeasonsSimple = () => {
      return $service.userData.seasons.map(_season => {
        return {
          title: _season.title,
          startDate: _season.startDate,
          endDate: _season.endDate,
          entries: _season.entries.map(_entry => {
            return {
              date: _entry.date,
              day: _entry.day,
              skiArea: _entry.skiArea
            };
          })
        };
      });
    };

    /**
     * Return an entry object who's date equal to the date passed as a parameter.
     * We use dates as a unique identifier for entries. If no date matches the parameter return null
     * 
     * @param {Date} _date A date object.
     * @returns {entry} An entry with the same date as _date. If no dates match, return null.
     */
    $service.getEntryByDate = (_date) => {
      let _allSeasons = $service.userData.seasons;

      // iterate over each season and its entries until an entry with the same date as _date is found
      for (let i = 0; i < _allSeasons.length; i++) {
        for (let j = 0; j < _allSeasons[i].entries.length; j++) {
          if (sameDate(_date, _allSeasons[i].entries[j].date)) {
            return _allSeasons[i].entries[j];
          }
        }
      }

      return null;
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
     * Removes an entry using an entry's date. Dates are unique ids for entries.
     * If the entry was the last entry for a season, remove the season object from $service.userData.seasons.
     * 
     * @param {Date} _date The date of an entry object.
     * @returns {array<simpleEntry>} Returns a new array of season objs with simpleEntry objs. If no item was removed, return null.
     */
    $service.removeEntryByDate = (_date) => {
      let _allSeasons = $service.userData.seasons;
      let _rmEntrySeason = null;

      // iterate over all seasons and entries until the entry to be removed is found
      for (let i = 0; i < _allSeasons.length; i++) {
        for (let j = 0; j < _allSeasons[i].entries.length; j++) {

          if (sameDate(_date, _allSeasons[i].entries[j].date)) {
            _allSeasons[i].entries.splice(j, 1);
            _rmEntrySeason = _allSeasons[i];
            break;
          }

        }
      }

      // if an entry was removed
      if (!!_rmEntrySeason) {
        // if the season obj containing removed entry now has no entries, remove the season obj, else reorganize the season's entries
        _rmEntrySeason.entries.length === 0 ? _allSeasons.splice(_allSeasons.indexOf(_rmEntrySeason), 1) : setEntriesDays(_rmEntrySeason.entries);

        // return all seasons containing simpleEntry objs
        return $service.getAllSeasonsSimple();
      }

      // return null if no entry was removed
      return null;
    };

    /**
     * Update an entry object. If the entry's date was modified, a vital change to the apps data struct will occur.
     * @param {entry} _updatedEntry The modified entry object the user is updating
     * @param {Date} _oldEntryDate A javascript date object representing the non updated entry object's date.
     */
    $service.updateEntry = (_updatedEntry, _oldEntryDate) => {
      let vitalChange = null;
      let returnEntry = null;

      // if the user updated the entry's date
      if (sameDate(_updatedEntry.date, _oldEntryDate)) {
        let oldEntry = $service.getEntryByDate(_oldEntryDate);

        // update entry obj fields
        oldEntry.description = _updatedEntry.description;
        oldEntry.skiArea = _updatedEntry.skiArea;
        oldEntry.skiedWith = _updatedEntry.skiedWith;
        oldEntry.stats.skiVert = _updatedEntry.stats.skiVert;
        oldEntry.stats.maxAlt = _updatedEntry.stats.maxAlt;
        oldEntry.stats.skiDist = _updatedEntry.stats.skiDist;
        oldEntry.stats.maxSpeed = _updatedEntry.stats.maxSpeed;

        // updatereturn vals
        vitalChange = false;
        returnEntry = oldEntry;
      } else {
        // date was updated, reorganize data struct to compensate for this
        $service.removeEntryByDate(_oldEntryDate);
        $service.addEntry(_updatedEntry);

        // return vital change occurred to let component know view needs to be refreshed
        vitalChange = true;
      }

      return {
        isVitalChange: vitalChange,
        entry: returnEntry
      };
    };


    /**
     * Create a new Season Object using the date of an entry the user is attempting to add.
     * All seasons have a range of 365 days and start and end on sept 1st.
     * 
     * @param {Date} _date A JS Date obj representing the date of an entry being added by the user.
     * @returns {season} A new season object with default vals.
     */
    function createNewSeasonObj(_date) {
      // the start && end of a any season will be Sept 1st
      let _startEndDate = new Date();
      _startEndDate.setFullYear(_date.getFullYear());
      _startEndDate.setMonth(8);
      _startEndDate.setDate(1);

      let _startDate = new Date(_startEndDate.getTime());
      let _endDate = new Date(_startEndDate.getTime());

      // update start or end date by +/- one year based on the value of _date
      _date.getTime() >= _startEndDate.getTime() ? _endDate.setFullYear(_startEndDate.getFullYear() + 1) : _startDate.setFullYear(_startEndDate.getFullYear() - 1);

      // return a new season object
      return {
        title: `${_startDate.getFullYear()} - ${_endDate.getFullYear()} Season`,
        startDate: _startDate.getTime(),
        endDate: _endDate.getTime(),
        entries: []
      };
    }

    /**
     * Sets each entries 'day' field.
     * The 'day' field represents which day of the ski season it is for the user (ie. first (1), tenth (10), etc.)
     * This function is called each time a new entry is added by the user.
     */
    function setEntriesDays(_entriesArr) {
      // sort entries by date (old to new)
      _entriesArr.sort((a, b) => a.date.getTime() - b.date.getTime());

      // update each entries 'day' field based on new index in entries arr
      for (let i = 0; i < _entriesArr.length;) _entriesArr[i].day = ++i;
    }

    /**
     * Returns true if the two date objects have the same Year, Month, and Day.
     * We use this method because date.getTime() accounts for hours, seconds, and milliseconds which
     * are determined when a date object is generated. We only want unique dates (ie. specific day) so
     * hours, seconds, and millisecond values of a date object should not determine date equality for this applicaiton.
     * 
     * @param {Date} _date1 a JS Date obj 
     * @param {Date} _date2 a JS Date obj
     * @returns {Boolean} true if the dates are equal (see desc of equality above) else returns false
     */
    function sameDate(_date1, _date2) {
      return (
        _date1.getFullYear() === _date2.getFullYear() &&
        _date1.getMonth() === _date2.getMonth() &&
        _date1.getDate() === _date2.getDate()
      );
    }
  });