// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Square from "./Square";
import { SquareProps } from "./Square.types";
describe("Test Component", () => {
  let props: SquareProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Square {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Square");
    expect(component).toHaveTextContent("harvey was here");
  });
});
