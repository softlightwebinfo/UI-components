// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import AlertText from "./AlertText";
import { AlertTextProps } from "./AlertText.types";
describe("Test Component", () => {
  let props: AlertTextProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<AlertText {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AlertText");
    expect(component).toHaveTextContent("harvey was here");
  });
});
