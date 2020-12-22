// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import OfBar from "./OfBar";
import { OfBarProps } from "./OfBar.types";
describe("Test Component", () => {
  let props: OfBarProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<OfBar {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("OfBar");
    expect(component).toHaveTextContent("harvey was here");
  });
});
