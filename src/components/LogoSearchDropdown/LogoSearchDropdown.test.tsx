// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import LogoSearchDropdown from "./LogoSearchDropdown";
import { LogoSearchDropdownProps } from "./LogoSearchDropdown.types";
describe("Test Component", () => {
  let props: LogoSearchDropdownProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<LogoSearchDropdown {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("LogoSearchDropdown");
    expect(component).toHaveTextContent("harvey was here");
  });
});
