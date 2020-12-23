// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Clamp from "./Clamp";
import { ClampProps } from "./Clamp.types";
describe("Test Component", () => {
  let props: ClampProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Clamp {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Clamp");
    expect(component).toHaveTextContent("harvey was here");
  });
});
