// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Wrap from "./Wrap";
import { WrapProps } from "./Wrap.types";
describe("Test Component", () => {
  let props: WrapProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Wrap {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Wrap");
    expect(component).toHaveTextContent("harvey was here");
  });
});
