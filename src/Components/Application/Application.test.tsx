import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading",{
        level:2
    })
    expect(sectionHeading).toBeInTheDocument();

    // textbox is the aria-role for input tag with type text
    const name = screen.getByRole("textbox", {
      name: "Name",
    }); // 'Name' is the content of the label for HTMLElement
    expect(name).toBeInTheDocument();

    //textbox is also the default aria-role of the textarea
    const bio = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bio).toBeInTheDocument();

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

// example for getByLabelText
  test("renders  correctly 1",()=>{
    render(<Application/>);

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const termsElement = screen.getByLabelText("I agree to the terms and conditions");
    expect(termsElement).toBeInTheDocument();
  })

//   getByPlaceHolderText example   
  test("renders correctly 3",()=>{
    render(<Application/>);

    const nameField = screen.getByPlaceholderText("Full Name");

    expect(nameField).toBeInTheDocument();
  })

});
