import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application/>);

    // textbox is the aria-role for input tag with type text
    const name = screen.getByRole('textbox');
    expect(name).toBeInTheDocument();

    // combobox is the aria-role for the select tag
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    //input with the type of checkbox have the aria-role of checkbox by default
    const termsCheck = screen.getByRole("checkbox");
    expect(termsCheck).toBeInTheDocument();

    //default aria-role for button is button
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
