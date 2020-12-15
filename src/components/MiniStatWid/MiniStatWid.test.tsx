// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import MiniStatWid from "./MiniStatWid";
import { MiniStatWidProps } from "./MiniStatWid.types";
describe("Test Component", () => {
  let props: MiniStatWidProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<MiniStatWid {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("MiniStatWid");
    expect(component).toHaveTextContent("harvey was here");
  });
});
