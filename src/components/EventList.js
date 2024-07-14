import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventList = ({ events = [] }) => {
  return (
    <ul id="event-list" role="list">
      {events.map(event => (
        <li key={event.id} role="listitem">
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
};

EventList.propTypes = {
  events: PropTypes.array,
};

export default EventList;

