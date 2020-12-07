// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import OutsideClickDetector from "./OutsideClickDetector";
import { OutsideClickDetectorProps } from "./OutsideClickDetector.types";
describe("Test Component", () => {
  let props: OutsideClickDetectorProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<OutsideClickDetector {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("OutsideClickDetector");
    expect(component).toHaveTextContent("harvey was here");
  });
});
