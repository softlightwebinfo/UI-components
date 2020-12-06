// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Pane from "./Pane";
import { PaneProps } from "./Pane.types";
describe("Test Component", () => {
  let props: PaneProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Pane {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Pane");
    expect(component).toHaveTextContent("harvey was here");
  });
});
