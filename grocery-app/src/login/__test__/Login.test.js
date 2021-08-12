import React from "react";
import Login from "../Login";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("title renders with correct text" , () => {
    const {getByTestId} = render (<Login />);
    const titleEl = getByTestId("boxTitle");

    expect(titleEl.textContent).toBe("Login")

})

// test("login render with correct test", () => {
//     const {getByTestId} = render(<Login />);
//     const loginBtn = getByTestId("login-btn");
//     expect(loginBtn.textContent).toBe("Login")


// })

test("label renders with correct text" , () => {
    const {getByTestId} = render (<Login />);
    const titleElem = getByTestId("email-label");

    expect(titleElem.textContent).toBe("Email")

})


test("label renders with correct text" , () => {
    const {getByTestId} = render (<Login />);
    const titleEle = getByTestId("password-label");

    expect(titleEle.textContent).toBe("Password")

})