// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import ToastContainer from "./ToastContainer";
import { ToastContainerProps } from "./ToastContainer.types";
describe("Test Component", () => {
  let props: ToastContainerProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<ToastContainer {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("ToastContainer");
    expect(component).toHaveTextContent("harvey was here");
  });
});
