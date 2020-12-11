// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";
import { FormProps } from "./Form.types";
describe("Test Component", () => {
  let props: FormProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Form {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Form");
    expect(component).toHaveTextContent("harvey was here");
  });
});
