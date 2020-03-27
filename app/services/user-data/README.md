# userData Service

The userData service is used to store and alter the user's Ski Entry data.  
Since we are not able to use an external server, this service will be used to store user data globally across the application.  

This README has info on the following:

* Service Functions
* userData Service Object Models
* Description of the `Entry` object

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

## Description of an Entry

An **entry** represents one day of skiing for the user and stores the following data on the user's day:

* Date
  * Uses a custom styled uib-datepicker within a component (`./app/components/datepicker`). When creating a new entry the default value will be the current date. Dates are stored as JavaScript Date object.
* Ski Area
  * The user is able to select ski areas from a custom dropdown component (`./app/components/dropdowns`).
    * Currently uses a simple dropdown, however if the list of selectable ski areas grows it would be more appropriate to change to a uib-typeahead.
  * A Ski Area object also contains other info about the ski area. See the `skiAreaService` README for the skiAreaObj object model.
* Who the user skied with (if anyone)
  * We maintain a set of people the user has skied with. The user updates the list themselves. This data is stored within the `userDataService`.
* Stats from their day
  * Vertical, distance skied, top speed, highest altitude.
* Description
  * A descritption is a string and hold the user's description for their day. Depending on the user this description can be different (what happened in that day, snow conditions, etc.)