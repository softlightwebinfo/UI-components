// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardProgressBlock from "./CardProgressBlock";
import { CardProgressBlockProps } from "./CardProgressBlock.types";
describe("Test Component", () => {
  let props: CardProgressBlockProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardProgressBlock {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardProgressBlock");
    expect(component).toHaveTextContent("harvey was here");
  });
});
