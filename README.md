**Meet Up App Project**

The objective of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. 
The application uses the Google Calendar API to fetch upcoming events.

**Deploy**
Application is currently deployed at https://alicemorey.github.io/meetup/

**Your Project Requirements Key Features:** 
Filter events by city, show and hide event details, specify number of events, use the App when offline, add an App shortcut to the home screen,
display charts visualising Event details. 

**Using Serverless Functions in my Meet App**

In my Meet app, I use serverless functions to manage user authentication and event management efficiently. For example, when a user logs in, a serverless function validates their credentials and generates a session token. Similarly, when users create or join events, serverless functions handle the backend logic to ensure seamless processing and scalability. This approach allows me to focus on developing new features while leveraging the scalability and cost-efficiency of serverless technology.


**Technical Requirements:**
- The app must be a Reactapplication.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work  on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11. Page 2
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on mobile.
- The app must be deployed on Git HubPages.
- The app must implement an alert system using an OOP approach to show information to the user.
- The app must make use of data visualization.
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online performance monitoring tool.


**TDD // User story formats**

**1. Feature 2: Show/hide event details**

As a user, 
I should be able to find event details and hide them again
So that I can see what events are able in the selected city

**2. Feature 3: Specify Number of Events**

As a user, 
I should be able to see how many events are on,
So that I can see how many I can attend to and which ones I can choose

**3. Feature 4: use the App when offline**

As a user, 
I should we able to access the App offline,
So that I can still see the event details if I have limited internet access

**4.Feature 5: add an App shortcut to the Home screen**

As a user, 
I should be access the App through a shortcut on my Home Screen, 
So that I can access it quicker 

**5.Feature 6: display charts visualising event details** 

As a user, 
I should be able to see the events in visible charts, 
So I can see how many events are coming up in cities I am interested to visit


**BDD// Writing test scenarios using ‘Given-When-Then’**

**1. Feature 2: Show/Hide event details**
Scenario 1: An event element is collapsed by default.
- Given: user has not been able to access the events to see detail
- When: user is able to click on an event it opens up on the screen 
- Then: user can find the event
 
Scenario 2: When a user has access to an event and would like to see the details of the event
- Given: user hasn’t looked at the details of the event,
- When: user finds and clicks on the event they are interested in,
- Then: user is able to see the details, including exact location and description of the event. 

Scenario 3:When a user has access to an event and would like hide details
- Given: user hasn’t hidden event details,
- When: user would like to hide event details by pressing a button,
- Then: user is able to press a button to hide details of an event they should be able to see the details of the event and then hide them again. 

**2. Feature 3: Specify Number of Events**

Scenario 1: When user hasn’t specified a number, 32 events are shown by default. 
- Given: user hasn’t found a list of events
- When: user clicks on a button to filter the events they are interested in,
- Then: the list of events appear. 

Scenario 2: User can change the number of events displayed.
- Given: user hasn’t specified a list of events that are displayed,
- When: user clicks on an amount of events they are would like to appear,
- Then: a new list of events appear in that amount:

**3. Feature 4: Use the App When Offline**

Scenario 1: Show cached data when there’s no internet connection.
- Given: user hasn’t be able to access the app offline,
- When: user has no internet connection and click a puts to sync the app offline mode,
- Then: user can access the App without internet connection.

Scenario 2: Show error when user changes search settings (city, number of events).
- Given: user hasn’t been able to change things when offline,
- When: user then changes the setting on the app to offline,
- Then: user is able to search whilst offline.

**4. Feature 5: Add an App Shortcut to the Home Screen**

Scenario 1: User can install the meet app as a shortcut on their device home screen. 
- Given: user has only been able to access the app through other ways on their device,
- When: user adds the app to their Home Screen,
- Then: user can access the app through a shortcut on their device.

**5. Feature 6: Display Charts Visualising Event Details**

Scenario 1: Show a chart with the number of upcoming events in each city.
- Given: user can not see the amount of events in each city,
- When: user accesses a visual chart with all the information of events in each city,
- Then: user can have an overview of all the events, so they can select. 
