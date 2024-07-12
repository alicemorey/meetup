import Event from './Event';
export const EventList = ({events}) => {
    return (
      <ul id="event-list">
        {events? events.map(event=> <Event event={event.id}/>): null}
      </ul>
    );
  }
  
  export default EventList;