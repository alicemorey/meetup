import { render, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberofEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  const mockSetCurrentNOE = jest.fn();
  const mockSetErrorText = jest.fn();

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents 
        setCurrentNOE={mockSetCurrentNOE} 
        setErrorText={mockSetErrorText}
      />
    );
  });

  test('renders the NumberOfEvents text input', () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('number-of-events-input');
  });

  test('default value of the input field is 32', () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toHaveValue('32');
  });

  test('value of NumberOfEvents component\'s textbox changes when user types in it', async () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    const user=userEvent.setup();
    await user.type(numberTextBox, "{backspace}{backspace}10");
    expect(numberTextBox.value).toBe('10');
  });
});

