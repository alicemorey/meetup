import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';    
import {getEvents} from '../api';
import Event from '../components/Event';

// Mock event data
/**const mockEvent = {
    kind: "calendar#event",
    etag: "\"3181161784712000\"",
    id: "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
    status: "confirmed",
    htmlLink: "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2d2u6tph2_20200519T140000Z",
    created: "2020-05-19T19:17:46.000Z",
    updated: "2020-05-27T12:01:32.356Z",
    summary: "Learn JavaScript",
    description: "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    location: "London, UK",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true
    },
    start: {
      dateTime: "2020-05-19T16:00:00+02:00",
      timeZone: "Europe/Berlin"
    },
    end: {
      dateTime: "2020-05-19T17:00:00+02:00",
      timeZone: "Europe/Berlin"
    },
    recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
    originalStartTime: {
      dateTime: "2020-05-19T16:00:00+02:00",
      timeZone: "Europe/Berlin"
    },
    iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: "default"
  };*/

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render (<Event event={allEvents[0]} />)
  });

    test("renders event title", () => {
      expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test("renders event location", () => {
      expect(screen.getByText(allEvents[0].location)).toBeInTheDocument();
    });

  test("renders event details button with the title (show details)", () => {
  expect(screen.getByText('show details')).toBeInTheDocument();
  });
  
  test("event details section hidden by default", () => {
    expect(screen.queryByText((content, element)=>{
      return element.tagName.toLowerCase() === 'p' &&
      element.className === 'details';
    })).not.toBeInTheDocument();
  });

  test("renders event details section when show details button is clicked", async() => {
    const user=userEvent.setup();
    await user.click(screen.getByText('show details'));
    expect(screen.getByLabelText((content, element)=>{
      return element.tagName.toLowerCase() === 'p' &&
      element.className === 'details';
    })).toBeInTheDocument();
    }); 


  test("shows details section when hide details button is clicked", async () => {
    const user = userEvent.setup();
    await user.click(screen.queryByText('show details'));

    expect(screen.getByText((content, element)=>{
      return element.tagName.toLowerCase() === 'p' &&
      element.className ==='details';
  })).toBeInTheDocument();
    expect(screen.getByText('hide details')).toBeInTheDocument();
    expect(screen.queryByText('show details')).not.toBeInTheDocument();
  });

  
  test("hides details section when hide details button is clicked", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByText('show details'));
    expect(screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && element.className === 'details';
    })).toBeInTheDocument();
    expect(screen.getByText('hide details')).toBeInTheDocument();
    expect(screen.queryByText('show details')).not.toBeInTheDocument();

    await user.click(screen.getByText('hide details'));
    expect(screen.queryByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && element.className === 'details';
    })).not.toBeInTheDocument();
    expect(screen.queryByText('hide details')).not.toBeInTheDocument();
    expect(screen.getByText('show details')).toBeInTheDocument();
  });
});
      
    
