import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberofEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert } from './components/Alert';



import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState ([]);
  const [currentNOE, setCurrentNOE]= useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorText, setErrorText] = useState("");



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
      <div className="alerts-container">
      {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      {errorText.length > 0 && <ErrorAlert text={errorText} />} 
      </div>
        <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} 
        />
        <NumberOfEvents
          setCurrentNOE ={setCurrentNOE}
          setErrorText={setErrorText}
        />
        <EventList 
        events={events}/>
      </div>
    )
  };

export default App;