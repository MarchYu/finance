import { screen, render } from "@testing-library/react";
import { Header } from "./Header";

test("renders header logo", () => {
  render(<Header />);
  const HeaderLogoElement = screen.getByText(/Hover for change percent/i);
  expect(HeaderLogoElement).toBeInTheDocument();
  expect(HeaderLogoElement).toMatchSnapshot();
  expect(HeaderLogoElement).toHaveClass("header");
});
