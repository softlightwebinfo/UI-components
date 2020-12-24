// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import RegisterWidget from "./RegisterWidget";
import { RegisterWidgetProps } from "./RegisterWidget.types";
describe("Test Component", () => {
  let props: RegisterWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<RegisterWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("RegisterWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
