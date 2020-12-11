// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import ProgressLabel from "./ProgressLabel";
import { ProgressLabelProps } from "./ProgressLabel.types";
describe("Test Component", () => {
  let props: ProgressLabelProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<ProgressLabel {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("ProgressLabel");
    expect(component).toHaveTextContent("harvey was here");
  });
});
