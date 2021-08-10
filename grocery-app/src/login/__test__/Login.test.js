import React from "react";
import Login from "../Login";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("title renders with correct text" , () => {
    const {getByTestId} = render (<Login />);
    const titleEl = getByTestId("boxTitle");

    expect(titleEl.textContent).toBe("Login")

})

// test("login button to route to dasboard page", () => {
//     const {getByTestId} = render(<Login />);
//     const loginBtn = getByTestId("login-btn");

// })