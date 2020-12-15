// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Tag from "./Tag";
import { TagProps } from "./Tag.types";
describe("Test Component", () => {
  let props: TagProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Tag {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Tag");
    expect(component).toHaveTextContent("harvey was here");
  });
});
