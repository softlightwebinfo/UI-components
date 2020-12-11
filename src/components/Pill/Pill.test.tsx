// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Pill from "./Pill";
import { PillProps } from "./Pill.types";
describe("Test Component", () => {
  let props: PillProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Pill {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Pill");
    expect(component).toHaveTextContent("harvey was here");
  });
});
