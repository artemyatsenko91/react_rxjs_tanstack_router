import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Input from "./Input";

describe("Input", () => {
    it("Should render", async () => {
        render(<Input data-testid="input" />);

        const input = screen.getByTestId("input");
        expect(input).toBeInTheDocument();
    });

    it("Should have class", async () => {
        render(<Input data-testid="input" />);

        const input = screen.getByTestId("input");
        expect(input).toHaveClass(/input/g);
    });
});
