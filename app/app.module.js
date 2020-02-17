'use strict';

// create app module
angular.module('skiTrackerApp', ['ngRoute']);

// import all other modules
require('./app.router');
require('./components/components.module');
require('./views/views.module');