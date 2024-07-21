Feature: Specify Number of Events
Scenario: 32 events are shown by default
 Given the user has not yet changed the number of events
 When the user is viewing the list of events
 Then 32 events will be displayed by default
    
Scenario: User can change the number of events displayed
  Given the user is viewing the list of events
  When the user selects a display button other than 32
  Then the selected number of events will be displayed