// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";
import { AlertProps } from "./Alert.types";
describe("Test Component", () => {
  let props: AlertProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Alert {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Alert");
    expect(component).toHaveTextContent("harvey was here");
  });
});
