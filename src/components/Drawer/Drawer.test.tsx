// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.types";
describe("Test Component", () => {
  let props: DrawerProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Drawer {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Drawer");
    expect(component).toHaveTextContent("harvey was here");
  });
});
