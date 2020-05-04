angular.module('skiTrackerApp')
  .component('calendar', {
    bindings: {
      date: '<'
    },
    templateUrl: './components/calendar/calendar.component.html',
    controller: 'calendarCtrl'
  })

  .controller('calendarCtrl', function() {
    let $ctrl = this;

    $ctrl.$onInit = () => {
      console.log('in calendar component', $ctrl.date);
    };
  });