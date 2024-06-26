Meet Up App Project

The objective of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. 
The application uses the Google Calendar API to fetch upcoming events.


TDD // User story formats
Feature 2: Show/hide event details

As a user, 
I should be able to find event details and hide them again
So that I can see what events are able in the selected city

Feature 3: Specify Number of Events

As a user, 
I should be able to see how many events are on
So that I can see how many I can attend to and which ones I can choose

Feature 4: use the App when offline 

As a user, 
I should we able to access the App offline 
So that I can still see the event details if I have limited internet access

Feature 5: add an App shortcut to the Home screen

As a user, 
I should be access the App through a shortcut on my Home Screen 
So that I can access it quicker 

Feature 6: display charts visualising event details 

As a user, 
I should be able to see the events in visible charts 
So I can see how many events are coming up in cities I am interested to visit


BDD// Writing test scenarios using ‘Given-When-Then’

Feature 2: Show/Hide event details 
Scenario 1:An event element is collapsed by default.
Given-
When-
Then-

Scenario 2: When a user has access to an event and would like to see the details of the event
Given-user hasn’t looked at the details of the event 
When- user finds and clicks on the event they are interested in
Then- user is able to see the details, including exact location and description of the event 

Scenario 3:When a user has access to an event and would like hide details
Given- user hasn’t hidden event details
When-user would like to hide event details by pressing a button 
Then- user is able to press a button to hide details of an event they should be able to see the details of the event and then hide them again 

Feature 3: Specify Number of Events

Scenario 1: When user hasn’t specified a number, 32 events are shown by default. 
Given- user hasn’t found a list of events
When-user clicks on a button to filter the events they are interested in 
Then- the list of events appear 

Scenario 2: User can change the number of events displayed.
Given- user hasn’t specified a list of events that are displayed
When- user clicks on an amount of events they are would like to appear
Then- a new list of events appear in that amount

Feature 4: Use the App When Offline 
Scenario 1: Show cached data when there’s no internet connection.
Given-  user hasn’t be able to access the app offline 
When- user has no internet connection and click a puts to sync the app offline mode
Then- user can access the App without internet connection

Scenario 2: Show error when user changes search settings (city, number of events).
Given- user hasn’t been able to change things when offline
When-user then changes the setting on the app to offline
Then- user is able to search whilst offline

Feature 5: Add an App Shortcut to the Home Screen
Scenario 1: User can install the meet app as a shortcut on their device home screen. 
Given- user has only been able to access the app through other ways on their device
When- user adds the app to their Home Screen 
Then- user can access the app through a shortcut on their device

Feature 6: Display Charts Visualising Event Details 
Scenario 1: Show a chart with the number of upcoming events in each city.
Given-user can not see the amount of events in each city
When- user accesses a visual chart with all the information of events in each city
Then- user can have an overview of all the events, so they can select 
