// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import LoginWidget from "./LoginWidget";
import { LoginWidgetProps } from "./LoginWidget.types";
describe("Test Component", () => {
  let props: LoginWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<LoginWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("LoginWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
