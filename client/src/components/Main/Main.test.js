import { screen, render } from "@testing-library/react";
import { Main } from "./Main";
import { RecoilRoot } from "recoil";

test("renders Main conponent", () => {
  render(
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
  const MainComponentElement = screen.getByTestId("main-component");
  expect(MainComponentElement).toBeInTheDocument();
});
