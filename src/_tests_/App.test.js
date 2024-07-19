import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(()=>{
    AppDOM = render(<App />).container.firstChild;
    })

    test('renders main components', () => {
        render(<App />);
        expect(screen.getByPlaceholderText('Search for a city')).toBeInTheDocument();
        expect(screen.getByLabelText(/number of events/i)).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
      });

    test('renders list of events', () => {
       expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('render CitySearch', () => {
        expect(screen.getByPlaceholderText('Search for a city')).toBeInTheDocument();
      });
    
    test('render NumberOfEvents', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    });
});

describe('<App /> integration', () => {
    test('renders a list of events matching the city selected by the user', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
    
        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');
    
        await user.type(CitySearchInput, "Berlin");
        const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
        await user.click(berlinSuggestionItem);
    
        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');   
    
        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter(
          event => event.location === 'Berlin, Germany'
        );
        expect(allRenderedEventItems.length).toBe(berlinEvents.length);
        allRenderedEventItems.forEach(event => {
            expect(event.textContent).toContain("Berlin, Germany");
          });  
    });
      

});