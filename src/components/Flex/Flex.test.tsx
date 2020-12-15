// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Flex from "./Flex";
import { FlexProps } from "./Flex.types";
describe("Test Component", () => {
  let props: FlexProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Flex {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Flex");
    expect(component).toHaveTextContent("harvey was here");
  });
});
