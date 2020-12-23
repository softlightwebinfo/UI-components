// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Info from "./Info";
import { InfoProps } from "./Info.types";
describe("Test Component", () => {
  let props: InfoProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Info {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Info");
    expect(component).toHaveTextContent("harvey was here");
  });
});
