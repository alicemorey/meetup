import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, setErrorText}) => {

  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value);

    if (isNaN(value) || value < 1 || value > 100) {
      setErrorText('Invalid number of events. Please enter a number between 1 and 100.');
    } else {
      setErrorText('');
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;