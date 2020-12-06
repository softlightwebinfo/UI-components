// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import TagInput from "./TagInput";
import { TagInputProps } from "./TagInput.types";
describe("Test Component", () => {
  let props: TagInputProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<TagInput {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TagInput");
    expect(component).toHaveTextContent("harvey was here");
  });
});
