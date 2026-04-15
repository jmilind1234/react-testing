import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Test suite for Counter component", () => {
  test("renders correctly", async () => {
    user.setup();
    render(<Counter />);
    const incButton = screen.getByRole("button", { name: "Increment" });
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("0");
    await user.click(incButton);
    expect(countHeading).toHaveTextContent("1");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const amountHeading = screen.getByRole("heading", { level: 1 });
    expect(amountHeading).toHaveTextContent("10");
  });

  test("elements are focused in correct order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
