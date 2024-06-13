import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
    it("Should render", async () => {
        render(<Button data-testid="button">Text</Button>);

        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
    });

    it("Should render with text", async () => {
        const testText = "Text";
        render(<Button data-testid="button">{testText}</Button>);

        const button = screen.getByTestId("button");
        expect(button).toHaveTextContent(testText);
    });
});
