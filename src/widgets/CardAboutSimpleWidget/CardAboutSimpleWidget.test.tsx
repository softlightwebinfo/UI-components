// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardAboutSimpleWidget from "./CardAboutSimpleWidget";
import { CardAboutSimpleWidgetProps } from "./CardAboutSimpleWidget.types";
describe("Test Component", () => {
  let props: CardAboutSimpleWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardAboutSimpleWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardAboutSimpleWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
