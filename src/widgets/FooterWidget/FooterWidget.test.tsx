// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import FooterWidget from "./FooterWidget";
import { FooterWidgetProps } from "./FooterWidget.types";
describe("Test Component", () => {
  let props: FooterWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<FooterWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("FooterWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
