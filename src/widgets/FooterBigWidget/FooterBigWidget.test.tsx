// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import FooterBigWidget from "./FooterBigWidget";
import { FooterBigWidgetProps } from "./FooterBigWidget.types";
describe("Test Component", () => {
  let props: FooterBigWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<FooterBigWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("FooterBigWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
