// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { SearchInputProps } from "./SearchInput.types";
describe("Test Component", () => {
  let props: SearchInputProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<SearchInput {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("SearchInput");
    expect(component).toHaveTextContent("harvey was here");
  });
});
