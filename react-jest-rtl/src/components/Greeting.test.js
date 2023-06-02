import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Greeting from './Greeting'

describe('<Greeting />', () => {
  test('renders Hellow World as a text', () => {
    // Arrange
    render(<Greeting/>)
  
    // Act
    // ... nothing
  
    // Assert
    const helloWorldElement = screen.getByText('Hello World!')
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was not clicked', () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const outputElement = screen.getByText('good to see you', { exact : false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed! if the the button was clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText('Changed!', {exact : true})
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render It\'s good to see you! if the the button was clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.queryByText('It\'s good to see you!', {exact : true})
    expect(outputElement).not.toBeInTheDocument();
  });
})

