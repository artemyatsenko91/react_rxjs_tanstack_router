import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import LoginForm from "./LoginForm";

describe("Button", () => {
    const handleSubmit = vi.fn();

    it("should render button", async () => {
        render(<LoginForm handleSubmit={handleSubmit} />);

        const button = screen.getByTestId("sign_in-button");
        expect(button).toBeInTheDocument();
    });

    it.each([
        {
            field: "label",
            text: "Name",
        },
        { field: "button", text: "Sign In" },
    ])(`should render $field text`, ({ field, text }) => {
        render(<LoginForm handleSubmit={handleSubmit}></LoginForm>);

        const element =
            field === "label"
                ? screen.getByLabelText(text)
                : screen.getByText(text);
        expect(element).toBeInTheDocument();
    });

    it("should render error text", () => {
        render(<LoginForm handleSubmit={handleSubmit}></LoginForm>);

        const button = screen.getByTestId("sign_in-button");
        fireEvent.click(button);
        const errorText = screen.getByText("Please enter your name");

        expect(errorText).toBeInTheDocument();
    });

    it("should invoke the handleSubmit callback", () => {
        render(<LoginForm handleSubmit={handleSubmit}></LoginForm>);

        const button = screen.getByTestId("sign_in-button");
        fireEvent.submit(button);

        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
