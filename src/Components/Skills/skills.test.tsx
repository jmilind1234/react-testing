import { render, screen } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];

  test("Component renders correctly", () => {
    render(<Skills skills={skills} />);
    const skillsList = screen.getByRole('list');
    expect(skillsList).toBeInTheDocument();
    const skillNames = screen.getAllByRole('listitem');
    console.log("skill names are", skillNames);
    expect(skillNames.length).toEqual(3);
  });
});
