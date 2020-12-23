// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Clamps from "./Clamps";
import { ClampsProps } from "./Clamps.types";
describe("Test Component", () => {
  let props: ClampsProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Clamps {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Clamps");
    expect(component).toHaveTextContent("harvey was here");
  });
});
