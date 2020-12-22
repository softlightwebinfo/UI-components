// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import FooterListWidget from "./FooterListWidget";
import { FooterListWidgetProps } from "./FooterListWidget.types";
describe("Test Component", () => {
  let props: FooterListWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<FooterListWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("FooterListWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
