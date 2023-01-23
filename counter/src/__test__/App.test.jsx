import { describe, expect, it } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Sample App vitest", () => {
  // describe -> Used to group the test and used to describe what is currently being tested.
  it("The title is visible", () => {
    // it or test -> Individual test which is run by Vitest. It can either pass or fail
    render(<App></App>);
    expect(screen.getByText(/Hello Vite \+ React!/i)).ToBeInTheDocument();
    // expect -> is used to create assertions. In this context assertions are functions that can be called to assert a statement.
  });
  it("Should decrement the count when icon (-) clicked", async () => {
    render(<App />);
    userEvent.click(screen.getByText("-"));
    expect(await screen.findByText(/count is: -1/i)).toBeInTheDocument();
  });
});
