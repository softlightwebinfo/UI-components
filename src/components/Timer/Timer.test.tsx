// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Timer from "./Timer";
import { TimerProps } from "./Timer.types";
describe("Test Component", () => {
  let props: TimerProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Timer {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Timer");
    expect(component).toHaveTextContent("harvey was here");
  });
});
