import { render, screen } from '@testing-library/react';
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

