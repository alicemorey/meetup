import { render } from '@testing-library/react';
import App from '../App';

//Scenario 1
describe('<App /> component', () => {
    let AppDOM;
    beforeEach(()=>{
        AppDOM = render(<App />).container.firstChild;
    })

    test('renders list of events', () => {
       expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });

    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
        });

    });
