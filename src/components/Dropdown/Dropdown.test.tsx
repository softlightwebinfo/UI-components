// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";
describe("Test Component", () => {
  let props: DropdownProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Dropdown {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Dropdown");
    expect(component).toHaveTextContent("harvey was here");
  });
});
