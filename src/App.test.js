import { render, fireEvent, screen } from '@testing-library/react';
import Form from './Form';

test('submitting the form with all required fields should call handleSubmit', () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  const nameInput = screen.getByLabelText(/Full Name/i);
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  const emailInput = screen.getByLabelText(/Email Address/i);
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

  const phoneInput = screen.getByLabelText(/Phone Number/i);
  fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });

  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  fireEvent.change(guestsInput, { target: { value: 2 } });

  const dateInput = screen.getByLabelText(/Date/i);
  fireEvent.change(dateInput, { target: { value: '2022-01-01' } });

  const timeInput = screen.getByLabelText(/Time/i);
  fireEvent.change(timeInput, { target: { value: '12:00' } });

  const messageInput = screen.getByLabelText(/Message/i);
  fireEvent.change(messageInput, { target: { value: 'Test message' } });

  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
