angular.module('skiTrackerApp')
  .service('skiAreaService', function() {
    let $service = this;  // so we don't confuse 'this' w/ scopes across functions and service module

    $service.skiAreas = [
      {
        name: 'Alta',
        locatin: {
          city: 'Alta',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Beaver',
        locatin: {
          city: 'Garden City',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Big Sky',
        locatin: {
          city: 'Big Sky',
          state: 'Montana',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Brian Head',
        locatin: {
          city: 'Brian Head',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Brighton',
        locatin: {
          city: 'Brighton',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Deer Vally',
        locatin: {
          city: 'Park City',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Jackson Hole',
        locatin: {
          city: 'Teton Village',
          state: 'Wyoming',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Nordic Valley',
        locatin: {
          city: 'Eden',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Park City',
        locatin: {
          city: 'Park City',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Powder Mountain',
        locatin: {
          city: 'Eden',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Snowbasin',
        locatin: {
          city: 'Huntsville',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Snowbird',
        locatin: {
          city: 'Snowbird',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Solitude',
        locatin: {
          city: 'Solitude',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Sundance',
        locatin: {
          city: 'Sundance',
          state: 'Utah',
          country: 'USA'
        },
        icon: null
      },
      {
        name: 'Woodward',
        locatin: {
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