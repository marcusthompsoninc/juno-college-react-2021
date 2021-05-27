import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

test("Header is rendered correctly", () => {
    const { getByText } = render(<Header />);
    const h1 = getByText("Cheers");
});