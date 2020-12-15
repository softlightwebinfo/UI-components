// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Divider from "./Divider";
import { DividerProps } from "./Divider.types";
describe("Test Component", () => {
  let props: DividerProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Divider {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Divider");
    expect(component).toHaveTextContent("harvey was here");
  });
});
