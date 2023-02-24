import { screen, render } from "@testing-library/react";
import { Ticker } from "./Ticker";

test("renders Ticker", () => {
  render(<Ticker />);
  const TickerElement = screen.getByTestId("ticker");
  expect(TickerElement).toBeInTheDocument();
});
