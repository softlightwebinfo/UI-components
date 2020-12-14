// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import IconSvg from "./IconSvg";
import { IconSvgProps } from "./IconSvg.types";
describe("Test Component", () => {
  let props: IconSvgProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<IconSvg {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("IconSvg");
    expect(component).toHaveTextContent("harvey was here");
  });
});
