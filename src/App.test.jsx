import { render } from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';
import Header from './components/header';

test("say hello to Techtonica", () => {
    // const {debug} = render(<App/>)
    // debug()
    const { getByText } = render(<App />);
    expect(getByText("Hello Techtonica!")).toBeDefined();

});

describe("Testing the Header", () => {
    //Create a test to check that the Header component renders
    test("It renders the Header", () => {
    // const {debug} = render(<Header/>)
    // debug()
        const { getByTestId } = render(<Header />);
        expect(getByTestId("header")).toBeDefined();
    });

    //Create a test to check that the NavBar component renders the name prop


})