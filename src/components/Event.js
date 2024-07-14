import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div>
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>Start Time: {new Date(event.start.dateTime).toLocaleString()}</p>
      <p>End Time: {new Date(event.end.dateTime).toLocaleString()}</p>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <p>Event Details Here</p>}
    </div>
  );
};

export default Event;