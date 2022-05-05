
import React from "react";
import { unmountComponentAtNode,screen, ReactDOM} from "react-dom";
import { render, fireEvent } from '@testing-library/react'

import Login from "./Login";

const setup = (pht) => {
  const utils = render(<Login />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = utils.getByPlaceholderText(pht)
  return {
    input,
    ...utils,
  }
}

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders h1",  () => {
 render(<Login />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.querySelector('h1').textContent).toBe("Name:  Pass:  Email: ");
});


it("renders username in h1", () => {
  const {input} = setup('Enter Username')
  fireEvent.change(input, {target: {value: 'JDBENSONWIU'}})
  expect(input.value).toBe('JDBENSONWIU')
    // eslint-disable-next-line testing-library/no-node-access
  expect(document.querySelector('h1').textContent).toBe("Name: JDBENSONWIU Pass:  Email: ");


})
