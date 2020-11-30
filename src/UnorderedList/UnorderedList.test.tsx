// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import UnorderedList from "./UnorderedList";
import { UnorderedListProps } from "./UnorderedList.types";
describe("Test Component", () => {
  let props: UnorderedListProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<UnorderedList {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("UnorderedList");
    expect(component).toHaveTextContent("harvey was here");
  });
});
