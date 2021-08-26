import React from "react";
import { createMemoryHistory } from "history";
import renderer  from "react-test-renderer";
import Navbar from "../Navbar";
import { render } from "@testing-library/react";
import { Switch, Route } from "react-router-dom";
import { iteratee } from "lodash";


// describe("Navbar" , () => {
//     it("should route to correct page on click", () => {
//         const hidtory = createMemoryHistory(["/", "/dashboard "])

//     })
// })


test("match snapshot", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    console.log(tree)

})