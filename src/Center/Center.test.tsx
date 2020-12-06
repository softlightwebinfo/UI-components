// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Center from "./Center";
import { CenterProps } from "./Center.types";
describe("Test Component", () => {
  let props: CenterProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Center {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Center");
    expect(component).toHaveTextContent("harvey was here");
  });
});
