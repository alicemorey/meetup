import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberofEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';

import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState ([]);
  const [currentNOE, setCurrentNOE]= useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData ();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
  const allEvents = await getEvents();
  const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    }

    return(
      <div className="App">
        <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}/>
        <NumberOfEvents
          setCurrentNOE ={setCurrentNOE}
        />
        <EventList 
        events={events}/>
      </div>
    )
  };

export default App;