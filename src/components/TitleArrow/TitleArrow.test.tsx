// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import TitleArrow from "./TitleArrow";
import { TitleArrowProps } from "./TitleArrow.types";
describe("Test Component", () => {
  let props: TitleArrowProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<TitleArrow {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TitleArrow");
    expect(component).toHaveTextContent("harvey was here");
  });
});
