import React, { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberofEvents';
import { extractLocations, getEvents } from './api';
import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE]= useState(32);
  const [allLocations, setAllLocations] = useState ([]);

  useEffect(() => {
    fetchData ();
  }, []);

  const fetchData = async () => {
  const allEvents = await getEvents();
      setEvents(allEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    }

    return(
      <div className="App">
        <CitySearch allLocations={allLocations}/>
        <NumberOfEvents/>
        <EventList events={events}/>
      </div>
    )
  };

export default App;