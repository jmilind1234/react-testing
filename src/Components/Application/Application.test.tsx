import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Test suit for Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    // default aria-role of the input html element with type text and textarea html element is textbox
    const name = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(name).toBeInTheDocument();

    const bio = screen.getByRole("textbox", {
      name: "Bio",
    });

    expect(bio).toBeInTheDocument();

    const jobApplicationHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(jobApplicationHeading).toBeInTheDocument();

    const section1Heading = screen.getByRole("heading", {
      level: 2,
    });
    expect(section1Heading).toBeInTheDocument();

    //default aria-role for select html element is combobox
    const jobSelector = screen.getByRole("combobox");
    expect(jobSelector).toBeInTheDocument();

    //default aria-role for checkbox input html element of type checkbox is checkbox
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    //default aria-role for button html element is button
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  test("renders correctly 2", () => {
    render(<Application />);

    const nameInputField = screen.getByLabelText("Name", { selector: "input" });
    expect(nameInputField).toBeInTheDocument();

    const bioTextArea = screen.getByLabelText("Bio");
    expect(bioTextArea).toBeInTheDocument();

    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsElement).toBeInTheDocument();
  });

  test("renders correctly 3", () => {
    render(<Application />);
    const nameField = screen.getByPlaceholderText("Full Name");
    expect(nameField).toBeInTheDocument();
  });

  test("renders correctly 4", () => {
    render(<Application />);
    const pElement = screen.getByText("All fields are mandatory");
    expect(pElement).toBeInTheDocument();
  });

  test("renders correctly 5", () => {
    render(<Application />);
    const nameElement = screen.getByDisplayValue("Milind");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders correctly 6",()=>{
    render(<Application/>);
    const imageWithAlt = screen.getByAltText("a person with a laptop");
    expect(imageWithAlt).toBeInTheDocument();
  })

  test("renders correctly 7", ()=>{
    render(<Application/>)
    const close = screen.getByTitle("close");
    expect(close).toBeInTheDocument();
  })

  test("renders correctly 9",()=>{
    render(<Application/>)
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  })
});
