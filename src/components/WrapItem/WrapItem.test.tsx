// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import WrapItem from "./WrapItem";
import { WrapItemProps } from "./WrapItem.types";
describe("Test Component", () => {
  let props: WrapItemProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<WrapItem {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("WrapItem");
    expect(component).toHaveTextContent("harvey was here");
  });
});
