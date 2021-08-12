import React from "react";
import Checkout from "../Checkout";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("title renders with correct text" , () => {
    const {getByTestId} = render (<Checkout />);
    const titleEl = getByTestId("name-label");

    expect(titleEl.textContent).toBe("Full Name")

})

test("title renders with correct text" , () => {
    const {getByTestId} = render (<Checkout />);
    const titleEl = getByTestId("id-label");

    expect(titleEl.textContent).toBe("Email Id")

})

test("title renders with correct text" , () => {
    const {getByTestId} = render (<Checkout />);
    const titleEl = getByTestId("address-label");

    expect(titleEl.textContent).toBe("Address")

})


test("title renders with correct text" , () => {
    const {getByTestId} = render (<Checkout />);
    const titleEl = getByTestId("city-label");

    expect(titleEl.textContent).toBe("City")

})


test("title renders with correct text" , () => {
    const {getByTestId} = render (<Checkout />);
    const titleEl = getByTestId("state-label");

    expect(titleEl.textContent).toBe("State")

})

test("title renders with correct text" , () => {
    const {getByTestId} = render (<Checkout />);
    const titleEl = getByTestId("pincode-label");

    expect(titleEl.textContent).toBe("Pincode")

})


