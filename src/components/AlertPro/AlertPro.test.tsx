// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import AlertPro from "./AlertPro";
import { AlertProProps } from "./AlertPro.types";
describe("Test Component", () => {
  let props: AlertProProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<AlertPro {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AlertPro");
    expect(component).toHaveTextContent("harvey was here");
  });
});
