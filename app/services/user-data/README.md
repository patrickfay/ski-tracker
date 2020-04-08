# userData Service

The userData service is used to store and alter the user's Ski Entry data.  
Since we are not able to use an external server, this service will be used to store user data globally across the application.  

This README has info on the following:

* Service Functions
* userData Service Object Models
* Adding and Removing an Entry

## Service Functions

Below is a list of the functions this service provides.  
To find out more about each function (description, params, returns) read each functions comments in `userData.service.js`.

* addSkiPartner()
* addEntry()
* clearData()
* getAllSeasons()
* getAllSeasonsSimple()
* getEntryByDate()
* getSkiPartners()
* removeEntry()

Private functions used by this service will be placed after all `$service` functions.

## userData Object's and their Models

It is important to understand the object models used for storing user data prior to attempting to use and update the data. There are three main types of objects used by this application and this service. This service also generates these objects. The objects are the `season` object, the `entry` object, and the `simpleEntry` object.

### `userData` object

Application wide data related to the user is stored in the object `$service.userData` within this service.  

```javascript
UserDataObj: {
  seasons: Array<Season>,
  skiPartners: Array<String>
}
```

### `season` object

This object is used to hold data related to a season of skiing data.  

```javascript
SeasonObj: {
  title: String,
  startDate: Number,
  endDate: Number,
  entries: Array<Entry>
}
```

The field title will have the format of `"startDateYear - endDateYear Season"`. If this object represented the 2019/2020 season, this fields value would be `"2019 - 2020 Season"`.

Note that `startDate` and `endDate` are of the type **number** and not a JS Date. These values are gotten from date objects and are the returned value of [`jsDateObj.getTime()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime). We use this value because storing this data is easier and smaller when converting all user data to a downloadable json file.  
Also, the start and end date will always be **September 1st** of a year. It was determined this is appropriate split between ski seasons for ski areas in the northern hemisphere.

### `entry` object

This object holds all data related to an entry for one ski day.  
Please note that each entry object **must have a unique date**. This service and the application use an entry's date as unique id for entry objs.

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

### `simpleEntry` object

This object is primarily used for the `entries-list` component to minimize the amount of data held by the component. We only get a full `entry` object when the user wants to see all data related to an entry. Before that, we use the data in this object below to 'preview' the entry to the user without holding all of its data within a component local var.

```javascript
SimpleEntryObj: {
  date: Date,
  day: Number,
  skiArea: SkiAreaObj
}
```

You can find the object model for the **`SkiAreaObj`** in the **skiAreas service README** ('services/ski-areas/README.md')

### `stats` object

This object is used to store data related to the user's ski day.

```javascript
StatsObj: {
  maxAlt: Number,
  skiDist: Number,
  skiVert: Number,
  topSpeed: Number
}
```

## Adding and Removing an Entry

This section contains basic descriptions and pseudocode for the process of Adding and Removing an Entry object, which are common actions the user will perform when interacting with this application.

### Adding an Entry

This process is started by calling the function `$service.addEntry(_entry)`.  
This function assumes the passed entry object has already been validated.

#### Pseudocode
```text
Iterate over all season objects:
    Locally store the season object this entry belongs

If a season object was not found for this entry:
    // if this condition is met, it means the user is adding an entry for a new ski season
    Create a new season object and store it locally
    Push the new season object to allSeasons array
    Reorganize the order of seasons in allSeasons by date

If the entry is a unique entry:
    Add the entry to the season object's entry array

Return true if the entry was added successfully, else return false
```

### Removing an Entry

This process is started by calling the function `$service.removeEntry(_date)`.

#### Pseudocode

```text
Iterate over each Season obj and each Season obj's array of entries until the entry to remove is found:
    Remove the entry from the Season obj's array of entries
    Store the Season obj locally

If an Entry was removed:
    If the Season obj now has no entries remaining in its array of entries:
        Remove the Season obj from the array of all Seasons
    Else:
        Reorder the Entries by date and update each entry obj's "day" field value

    Return the updated all Seasons array with each season containing simpleEntry objects
Else:
    Return null
```