import { render,within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getEvents } from '../api';
import EventList from "../components/EventList";

describe("<EventList /> component", () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);

    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  describe('<EventList /> integration', () => {
    test('renders a list of 32 events when the app is mounted and rendered', async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

  });

  test("renders correct number of events", () => {
    const EventListComponent = render(
      <EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
    );
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });
});

