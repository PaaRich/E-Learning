import { screen, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import '@testing-library/jest-dom/vitest';
import Button from "./Button";

describe("Testing the button", () => {
    test("test existence with state", () => {
        render(<Button text={"Sign in"} isFilled/>)
        const Btn = screen.getByRole("button")
        expect(Btn).toBeInTheDocument()
        //expect(Btn).toHaveStyle("background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color))!important")
    })

    test("renders button with correct text prop", () => {
        const buttonText = "Click Me";
        render(<Button text={buttonText} />);
        const Btn = screen.getByRole("button",{name:buttonText});
        expect(Btn).toHaveTextContent(buttonText);
    });

})