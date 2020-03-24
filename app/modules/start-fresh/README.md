# Start Fresh Module

This module is used when the user is creating their first Entry.

This module is displayed on the Entry Dashboard page when there are no entries stored in the `userDataService`.

## Module Components

### `start-fresh` Component

This is the main component of this module. This component uses the `new-entry` component to allow the user to add input for their first entry. This component then uses the `first-entry-modal` to display a message to the user signaling a succesful and valid entry was entered. Once the `first-entry-modal` is closed, this component (`start-fresh`) adds the new entry to the `userDataService`. Doing so alters the components viewed on the Entry Dashboard page.

### `first-entry-modal` Component

This component is used for a [uib-modal](https://angular-ui.github.io/bootstrap/). The modal alerts the user their entry was valid and that the user will be redirected to the Entry Dashboard view, although no redirect actually occurs.  
This component does not update any global application data, it simply displays a message and a countdown timer.