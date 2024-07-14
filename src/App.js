import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberofEvents';
import './App.css';

const App = () => {
  const [eventCount, setEventCount] = useState(32);

  const updateEventCount = (count) => {
    setEventCount(count);
  };

 return (
   <div className="App">
     <CitySearch />
     <NumberOfEvents updateEventCount={updateEventCount} />
     <EventList numberOfEvents={eventCount}/>
   </div>
 );
}

export default App;