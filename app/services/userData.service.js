angular.module('skiTrackerApp')
  .service('userDataService', function() {
    let $service = this;  // so we don't confuse 'this' w/ scopes across functions and service module

    // we use this variable to hold the user's data across the application
    $service.userData = {
      entries: null,
      skiPartners: []
    };


    // add user's entries
    $service.setEntries = (_entries) => {
      $service.userData.entries = _entries;
    };

    // add new ski partner
    $service.addSkiPartner = (_partnerName) => {
      $service.userData.skiPartners.push(_partnerName)
    };

    // get all user's entries
    $service.getEntries = () => {
      return $service.userData.entries;
    };

    // get all user's ski partners
    $service.getSkiPartners = () => {
      return $service.userData.skiPartners;
    };

    // clear data stored in this service
    $service.clearData = () => {
      $service.userData.entries = null;
      $service.userData.skiPartners = [];
    };
  });