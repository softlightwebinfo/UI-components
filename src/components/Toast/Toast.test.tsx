// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Toast from "./Toast";
import { ToastProps } from "./Toast.types";
describe("Test Component", () => {
  let props: ToastProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Toast {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Toast");
    expect(component).toHaveTextContent("harvey was here");
  });
});
