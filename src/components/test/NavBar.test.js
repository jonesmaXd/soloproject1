import Navbar from "../Navbar";
import {screen, cleanup, render} from "@testing-library/react"
import '@testing-library/jest-dom'


test("navbar displays correct", () => {
    render(<Navbar />)
    const navbarFacts = screen.getByTestId("reactfacts");
    expect(navbarFacts).toBeInTheDocument();
    expect(navbarFacts).toHaveTextContent("")
});