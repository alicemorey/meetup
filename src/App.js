import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberofEvents';
import CityEventsChart from './components/CityEventsChart';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert } from './components/Alert';
import { ErrorAlert } from './components/Alert';
import { WarningAlert } from './components/Alert';


import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState ([]);
  const [currentNOE, setCurrentNOE]= useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorText, setErrorText] = useState("");
  const [warningText, setWarningText] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
    } else {
      // set the warning alert message to a non-empty string
    }
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
      {warningText.length > 0 && <WarningAlert text={warningText} />} 
      </div>
        <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} 
        />
        <NumberOfEvents
          setCurrentNOE={setCurrentNOE}
          setErrorText={setErrorText}
          setWarningText={setWarningText}
        />
        <div className="charts-container">
        <CityEventsChart 
          allLocations={allLocations} 
          events={events} />
          </div>
        <EventList 
        events={events}/>
      </div>
    )
  };

export default App;