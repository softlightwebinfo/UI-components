// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardFeature from "./CardFeature";
import { CardFeatureProps } from "./CardFeature.types";
describe("Test Component", () => {
  let props: CardFeatureProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardFeature {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardFeature");
    expect(component).toHaveTextContent("harvey was here");
  });
});
