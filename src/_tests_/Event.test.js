import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Event from '../components/Event';
import allEvents from "../mock-data";

// Mock event data
const mockEvent = {
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
  };

describe('<Event /> component', () => {

     // Test event title
  test("renders event title", () => {
    const {queryByText} = render (<Event event={mockEvent} />);
    expect(queryByText(mockEvent.summary)).toBeInTheDocument();
  });

    // Test event start time
    test("renders event title", () => {
    const {getByText} = render(<Event event={mockEvent} />);
    const formattedDate = new Date(mockEvent.start.dateTime).toLocaleString();
    expect(getByText(formattedDate)).toBeInTheDocument();
  });

    // Test event location
    test("renders event location", () => {
        const {queryByText} = render(<Event event={mockEvent} />);
        expect(queryByText(mockEvent.location)
        ).toBeInTheDocument();
      });
});

test("renders event details button with the title (show details)", () => {
    const {queryByText} = render(<Event event={mockEvent} />);
    expect(queryByText('Show Details')).toBeInTheDocument();
  });

  test("event details section hidden by default", () => {
    const {queryByText} = render(<Event event={mockEvent} />)
    expect(queryByText('Event Details Here')).not.toBeInTheDocument();
  });

   // Test hides details section when show details button is clicked
   test("hides details section when show details button is clicked", async () => {
    const { getByText, queryByText } = render(<Event event={mockEvent} />);
    fireEvent.click(getByText('Show Details'));
    expect(queryByText('Event Details Here')).toBeInTheDocument();
    fireEvent.click(getByText('Hide Details'));
    expect(queryByText('Event Details Here')).not.toBeInTheDocument();
  });
    
      // Test shows details section when hide details button is clicked
  test("shows details section when hide details button is clicked", async () => {
    const { getByText, queryByText } = render(<Event event={mockEvent} />);
    fireEvent.click(getByText('Show Details'));
    fireEvent.click(getByText('Hide Details'));
    fireEvent.click(getByText('Show Details'));
    expect(queryByText('Event Details Here')).toBeInTheDocument();
  });
    
