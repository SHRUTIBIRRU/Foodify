import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page test cases", () => {
  // beforeAll(() => console.log("Before All testcases"));

  // beforeEach(() => console.log("Before Each testcase"));

  // afterAll(() => console.log("After all testcases"));

  // afterEach(() => console.log("After each testcases"));

  test("Should load Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside COntact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact component ", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});
