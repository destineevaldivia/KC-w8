import { render } from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';
import Header from './components/header';
import Item from './components/item';

//sanity check
test("say hello to Destinee", () => {
    // const {debug} = render(<App/>)
    // debug()
    const { getByText } = render(<App />);
    expect(getByText("Hello Destinee!")).toBeDefined();

});
//test #1
    test("Test to check that the Header component renders", () => {
    // const {debug} = render(<Header/>)
    // debug()
        const { getByTestId } = render(<Header />);
        expect(getByTestId("header")).toBeDefined();
    });

//test #2
    test("Test if items in the list (Item component) are rendered correctly", () => {
        const items = [
            { text: "dog" },
            { text: "family" },
            { text: "friends" },
        ];  
        const { getByText } = render(
            <div>
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
        );
        items.forEach((item) => {
            expect(getByText(item.text)).toBeDefined();
        });
    })
//test #3
//Test if the Form component works as expected or is rendered correctly.

//test#4
//Test any other functionality or edge case you think is necessary.


