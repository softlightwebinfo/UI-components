// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardArticleFeaturedWidget from "./CardArticleFeaturedWidget";
import { CardArticleFeaturedWidgetProps } from "./CardArticleFeaturedWidget.types";
describe("Test Component", () => {
  let props: CardArticleFeaturedWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardArticleFeaturedWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardArticleFeaturedWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
