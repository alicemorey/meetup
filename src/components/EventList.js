import React from 'react';

const EventList = ({ events = [] }) => {
  return (
    <ul id="event-list" role="list">
      {events.map((event) => (
        <li key={event.id} role="listitem">
         <p>Event ID {event.id}</p>
         <p>Event DateTime: {event.dateTime}</p>
        </li>
      ))}
    </ul>
  );
};
export default EventList;

