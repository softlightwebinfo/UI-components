// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import SearchDropdown from "./SearchDropdown";
import { SearchDropdownProps } from "./SearchDropdown.types";
describe("Test Component", () => {
  let props: SearchDropdownProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<SearchDropdown {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("SearchDropdown");
    expect(component).toHaveTextContent("harvey was here");
  });
});
