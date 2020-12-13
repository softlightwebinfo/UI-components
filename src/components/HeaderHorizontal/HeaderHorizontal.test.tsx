// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import HeaderHorizontal from "./HeaderHorizontal";
import { HeaderHorizontalProps } from "./HeaderHorizontal.types";
describe("Test Component", () => {
  let props: HeaderHorizontalProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<HeaderHorizontal {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("HeaderHorizontal");
    expect(component).toHaveTextContent("harvey was here");
  });
});
