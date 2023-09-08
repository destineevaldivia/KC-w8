import { render } from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';

test("say hello to Techtonica", () => {
    // const {debug} = render(<App/>)
    // debug()
    const { getByText } = render(<App />);
    expect(getByText("Hello Techtonica!")).toBeDefined();

});