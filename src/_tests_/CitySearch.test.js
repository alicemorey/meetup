import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import App from '../App';
import { extractLocations, getEvents } from '../api';

const user = userEvent.setup();

async function setupCitySearch() {
  const allEvents = await getEvents();
  const allLocations = extractLocations(allEvents);
  return render(<CitySearch allLocations={allLocations} />);
}

describe('<CitySearch /> component', () => {
  test('renders text input',async () => {
    const {queryByRole}= await setupCitySearch();
    const cityTextBox = queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is hidden by default',async () => {
    const{queryByRole}= await setupCitySearch();
    const suggestionList = queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
  });

  test('renders a list of suggestions when city textbox gains focus', async () => {
    const {queryByRole}= await setupCitySearch();
    const cityTextBox = queryByRole('textbox');
    await user.click(cityTextBox);
    await new Promise(resolve => setTimeout(resolve, 0));
    const suggestionList = queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
  });

  test('updates list of suggestions correctly when user types in city textbox', async () => {
    const { queryByRole, queryAllByRole } = await setupCitySearch();
    const cityTextBox = queryByRole('textbox');
    await user.type(cityTextBox, "Berlin, Germany");
    
    const suggestionListItems= queryAllByRole('listitem');
    const allLocations = await getEvents(). then (extractLocations);
    const filteredLocations = allLocations.filter((location) => 
      location.toUpperCase().includes("BERLIN, GERMANY".toUpperCase())
    );
    expect(suggestionListItems).toHaveLength(filteredLocations.length + 1);
    filteredLocations.forEach((location, index) => {
    expect(suggestionListItems[index]).toHaveTextContent(location);
    });
  });
  
  test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
    const { queryByRole, queryAllByRole } = await setupCitySearch();
    const cityTextBox = queryByRole('textbox');
    await user.type(cityTextBox, "Berlin, Germany");
    const suggestionListItems = queryAllByRole('listitem');
    await user.click(suggestionListItems[0]);
    expect(cityTextBox).toHaveValue(suggestionListItems[0].textContent);
  });

  test('renders the suggestion text in the textbox upon pressing the Enter key', async () => {
    const { queryByRole, queryAllByRole } = await setupCitySearch();
    const cityTextBox = queryByRole('textbox');
    await user.type(cityTextBox, "Berlin, Germany");
    const suggestionListItems = queryAllByRole('listitem');
    await user.type(cityTextBox, '{enter}');
    await new Promise(resolve => setTimeout(resolve, 0)); // Add a small delay
    expect(cityTextBox).toHaveValue("Berlin, Germany");
  });
});


describe('<CitySearch /> integration', () => {
  test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
    expect(suggestionListItems.length).toBe(allLocations.length + 1);
 });
});