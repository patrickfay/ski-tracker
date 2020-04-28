# Entries Dashboard

This README contains info about this view and the components it uses to display data to the user.

You can find the following sections within this README:

* Variables Used To Display Data
* Vital Changes

## Variables Used To Display Data

This view uses one object to manage and display entry data:

* `$scope.seasons.all`
  * This is an array of ALL seasons containing ALL `simpleEntry` objects.
* `$scope.seasons.displayed`
  * This is an array of seasons containing `simpleEntry` objects **that the user wants to view**.
  * All seasons and entries held in this object will be displayed by this view.
  * The value of this array will be updated by the `seasons-filter` component.

## Vital Changes

One process that may be difficult to view/understand just from looking at this view's controller is the Vital Change Process.

A **Vital Change** occurs when the user updates the overall structure of our user's Seasons data, which is stored in our `userData` service (see the userDataService readme for an understanding of the data structures affected by these changes).  
Vital Changes are caused by:

* Adding a new `entry` object
* Updating an `entry` object's `date` field
* Deleting an `entry` object

When a Vital Change occurs, multiple `entry objects` have fields updated and or have their positions changed in their parent `season` objects `entries` field (which is an array of `entry` objects). When the user is viewing this view, these Vital Changes must be relfected in the view immediately.

It is important to note that this view does not fire any events to trigger these changes, this view and its controller are used to hold and display the data. The **child components** of this view are responsible for triggering Vital Changes.

### Vital Changes Process

Below are breif explinations of the processes that occur when the different Vital Changes to our data structure are made. These explinations also explain where these process are triggered.

#### Adding A New `entry` Object

Adding a new entry occurs within the `season-filter` component.  
**THIS COMPONENT HAS NOT BEEN IMPLEMENTED YET** - but below is a brief overview of how the process should occur.

The user presses the `CREATE NEW ENTRY` button, seen at the bottom of the filter component. Once the user has entered data for the new `entry` object, the `userDataService` is used to add the entry to our data structure.  To reflect these changes callback functions will alert this view's controller (`entries-dashboard.controller.js`) that a Vital Change has occurred.

See the section **Reflecting Vital Changes in This View** section below to see what occurs once our view's controller is notified of a Vital Change.

#### Updating An `entry` Object's `date` Field

Updating an `entry` object's `date` field kick starts this process for two reasons:

* An `entry` object's `date` field is used as unique identifier for `entry` objects.
* Updating this field can change the value of the `day` field for each `entry` object in the changed `entry` object's season.

This process occurs when the user manually updates the date field of the entry.  
This causes the following process to occur:

* The `entries-list-item` component calls the `userDataService` to update the entry object.
  * Since a date object is a unique ID for `entry` objects, this requires removing the original `entry` object from data, then adding the new `entry` object to our data struct.
* The `entries-list-item` component communicates with its parent component, `entries-list`, using a callback function to alert it of the Vital Change occuring.
* The `entries-list` communicates with its parent component, this view, using a callback function to alert if of the Vital Change occuring.

See the section **Reflecting Vital Changes in This View** section below to see what occurs once our view's controller is notified of a Vital Change.

#### Deleting An `entry` Object

Deleting an `entry` object is caused by the user manually deleting the entry.

The action of deleting an entry is triggered by the `entries-list-item` component. So the same process occurs for the deletion of an `entry` object as above.

See the section **Reflecting Vital Changes in This View** section below to see what occurs once our view's controller is notified of a Vital Change.

#### Reflecting Vital Changes in This View

To reflect the changes that have now occurred to our data structure in this view, the following process occurs:

* Store the previous state of seasons in a temp var (do this to save the `isExpanded` field of prev `season` objs)
* Get our new data and store it in `$scope.seasons.all`.
* Call `$scope.applyFilter()` to apply the current state of our filter component to the newly formatted data structure.
* Iterate over `$scope.seasons.displayed` and reset the values of each season's `isExpanded` field.

That's all.