# skiAreas Service

The ski areas service is used to get data related to ski areas needed for this application.

**None** of this data should be manipulated by the user.  
If you would like to update any information gotten by this service or add to it, you can do so yourself by updating the variable `$service.skiAreas`.

This README has info on the following:

* Service Functions
* skiArea Service Object Models

## Service Functions

Below is a list of the functions this service provides.  
To find out more about each function (description, params, returns) read each functions comments in `skiAreas.service.js`.

* getAllSkiAreas()
* getAllSkiAreasNames()
* getSkiAreaByName()
* getSkiAreasByLocation()

## Ski Area Object's and their Models

Below is the object model for the `skiArea` object:

```javascript
skiAreaObj: {
  name: string,
  location: locationObj,
  icon: sting || null
}
```

Below is the object model for the `location` object:

```javascript
locationObj: {
  city: string,
  state: string,
  country: string
}
```