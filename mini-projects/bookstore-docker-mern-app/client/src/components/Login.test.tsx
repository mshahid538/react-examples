import { render, screen } from '@testing-library/react'; 
import Login from './Login';

test('renders login form properly', () => {
   render(<Login />); 
  const inputUsername = screen.getByLabelText(/Username:/i);
  expect(inputUsername).toBeInTheDocument();
});
