import { screen, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

const MockNavbar = () => {
    return (
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    )
}
describe("Navbar", () => {
    test("test hover on navlinks displays dropdown",async () => {
        userEvent.setup()
        render(<MockNavbar/>);
        const courses = screen.getByText(/courses/i);
        const dropdown = screen.getByRole("courses_drop");
        await userEvent.hover(courses)
        expect(dropdown).toHaveStyle("display:block");
        
  })
})