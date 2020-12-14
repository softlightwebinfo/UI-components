// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardGoodJobWidget from "./CardGoodJobWidget";
import { CardGoodJobWidgetProps } from "./CardGoodJobWidget.types";
describe("Test Component", () => {
  let props: CardGoodJobWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardGoodJobWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardGoodJobWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
