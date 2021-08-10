import React from "react"
import ReactDom from 'react-dom';
import EmptyCart from "../EmptyCart"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


test("header renders with correct text" , () => {
    const component = render(<EmptyCart />);
    const headerEl = component.getByTestId("header");



    expect(headerEl.textContent).toBe("Your have no item added in your Cart")

})