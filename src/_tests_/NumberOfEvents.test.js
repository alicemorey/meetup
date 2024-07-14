import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberofEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  const user = userEvent.setup();

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents updateEventCount={() => {}} />);
  });

  test('renders the NumberOfEvents component correctly', () => {
    const numberInput = NumberOfEventsComponent.container.querySelector('#number-of-events');
    expect(numberInput).toBeInTheDocument();
  });

  test('NumberOfEvents component contains an element with the role of textbox', () => {
    const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
    expect(numberInput).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
    expect(numberInput).toHaveValue(32);
  });

  test('value of NumberOfEvents component\'s textbox changes when user types in it', async () => {
    const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
    await user.type(numberInput, '{backspace}{backspace}10');
    expect(numberInput).toHaveValue(10);
  });
});