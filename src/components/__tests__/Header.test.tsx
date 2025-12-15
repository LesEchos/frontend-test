import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render the header title", () => {
    render(<Header />);

    expect(screen.getByText("NEWSLETTERS")).toBeInTheDocument();
  });

  it("should render subtitle content", () => {
    render(<Header />);

    expect(screen.getByText(/newsletters selon vos centres d'intérêt/)).toBeInTheDocument();
  });
});
