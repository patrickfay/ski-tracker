angular.module('skiTrackerApp')
  .service('skiAreaService', function() {
    let $service = this;  // so we don't confuse 'this' w/ scopes across functions and service module

    $service.skiAreas = [
      {
        name: 'Alta',
        location: {
          city: 'Alta',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Beaver',
        location: {
          city: 'Garden City',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Big Sky',
        location: {
          city: 'Big Sky',
          state: 'Montana',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Brian Head',
        location: {
          city: 'Brian Head',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Brighton',
        location: {
          city: 'Brighton',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Deer Vally',
        location: {
          city: 'Park City',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Jackson Hole',
        location: {
          city: 'Teton Village',
          state: 'Wyoming',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Nordic Valley',
        location: {
          city: 'Eden',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Park City',
        location: {
          city: 'Park City',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Powder Mountain',
        location: {
          city: 'Eden',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Snowbasin',
        location: {
          city: 'Huntsville',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Snowbird',
        location: {
          city: 'Snowbird',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Solitude',
        location: {
          city: 'Solitude',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Sundance',
        location: {
          city: 'Sundance',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Woodward',
        location: {
          city: 'Park City',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      }
    ];


    $service.getAllSkiAreas = () => {
      return $service.skiAreas;
    };

    $service.getSkiAreaByName = (_name) => {
      let _skiArea = null;

      for (let i = 0; i < $service.skiAreas.length; i++) {
        if ($service.skiAreas[i].name === _name) {
          _skiArea = $service.skiAreas[i];
          break;
        }
      }

      return _skiArea;
    };

    /**
     * Get a ski area by its location. You can get a ski area by either it's city, state, or country.
     * 
     * @param {string} _locType The type of location to search by. MUST be either 'city', 'state', or 'country'
     * @param {string} _loc The name of the location you are searching for (ie. 'Utah')
     * @returns {array<skiArea>} An array of ski areas in the searched location. Will be an empty array if none found w/in searched area.
     */
    $service.getSkiAreasByLocation = (_locType, _loc) => {
      return $service.skiAreas.filter(_sa => _sa.location[_locType] === _loc);
    };
  });