Feature: Show/Hide Event Details
Scenario: An event element is collapsed by default
  Given the user has not expanded any event
  When the user views the event list
  Then all event details should be hidden

Scenario: User can expand an event to see its details
  Given the user is viewing the event list
  When the user clicks on an event
  Then the details of that event should be displayed

Scenario: User can collapse an event to hide its details
  Given the user has expanded an event to see its details
  When the user clicks on the "hide details" button
  Then the event details should be hidden
