// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import ListItem from "./ListItem";
import { ListItemProps } from "./ListItem.types";
describe("Test Component", () => {
  let props: ListItemProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<ListItem {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("ListItem");
    expect(component).toHaveTextContent("harvey was here");
  });
});
