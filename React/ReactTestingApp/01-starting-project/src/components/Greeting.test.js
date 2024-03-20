import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting";
import userEvent from '@testing-library/user-event';

describe('Greeting componenet', () => {

    test('renders Hello world as an text.', () => {
        //1. Arrange
        render(<Greeting />);
        //2. Act
        //... nothing
        //3. Assert
        const helloWorldElement = screen.getByText('Hello World');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was not clicked.', () => {

        // Arrange
        render(<Greeting />);
        //Act
        ///nothing
        //Assert
        const outputElement = screen.getByText("It's good to see you.", { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders changed if the button was clicked.', () => {

        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText("Change Text", { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render good to see you if the button was clicked.', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement = screen.queryByText("It's good to see you.", { exact: false });
        expect(outputElement).toBeNull();
    });
});

