import React, { useState } from 'react';

const NumberOfEvents = ({ updateEventCount }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventCount(value);
    updateEventCount(value);
  };

  return (
    <div>
      <label htmlFor="number-of-events">Number of Events:</label>
      <input
        type="number"
        id="number-of-events"
        className="number"
        value={eventCount}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;