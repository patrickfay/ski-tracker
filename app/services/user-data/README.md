# userData Service

The userData service is used to store and alter the user's Ski Entry data.  
Since we are not able to use an external server, this service will be used to store user data globally across the application.  

This README has info on the following:

* Service Functions
* userData Service Object Models

## Service Functions

Below is a list of the functions this service provides.  
To find out more about each function (description, params, returns) read each functions comments in `userData.service.js`.

* setEntries()
* addSkiPartner()
* addEntry()
* getEntries()
* getSkiPartners()
* clearData()

## userData Object's and their Models

It is important to understand the object models used for storing user data prior to attempting to use and update the data. Below are object models used to store user data.

Below is the object model the the `userData` object:

```javascript
UserDataObj: {
  entries: Array<Entry>,
  skiPartners: Array<String>
}
```

Below is the object model for the `Entry` object:

```javascript
EntryObj: {
  date: Date,
  day: Number,
  description: String,
  skiArea: SkiAreaObj,
  skiedWith: Array<String>,
  stats: StatsObj
}
```

You can find the object model for the **`SkiAreaObj`** in the **skiAreas service README** ('services/ski-areas/README.md')

Below is the object model for the `Stats` object:

```javascript
StatsObj: {
  maxAlt: Number,
  skiDist: Number,
  skiVert: Number,
  topSpeed: Number
}
```