// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Circle from "./Circle";
import { CircleProps } from "./Circle.types";
describe("Test Component", () => {
  let props: CircleProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Circle {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Circle");
    expect(component).toHaveTextContent("harvey was here");
  });
});
