import { render, screen, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./App";

const setup = () => render(<App />);

describe("SearchPage", () => {
  it("should render the header", () => {
    setup();
    const heading = screen.getByRole("heading", {
      name: /NASA PHOTOS/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it("should render the footer", () => {
    setup();
    const footer = screen.getByRole("contentinfo");

    expect(footer).toHaveTextContent(
      /Project created during Wizeline Academy React Testing Bootcamp/i
    );
  });
  it("should render the input", () => {
    setup();
    const input = screen.getByPlaceholderText("dd/mm/yyyy");

    expect(input).toBeInTheDocument();
  });
  it("should render the title of the picture", () => {
    setup();

    screen.debug();
  });
});
