import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';

describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(()=>{
        EventListComponent = render(<EventList />);
    })

    test ('has an element with "list" tole',()=>{
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    test('renders correct number of events', async () => {
      const allEvents = await getEvents(); 
      EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });
});