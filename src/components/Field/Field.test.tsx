// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import TextInputField from "./TextInputField";
import { TextInputFieldProps } from "./TextInputField.types";
describe("Test Component", () => {
  let props: TextInputFieldProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<TextInputField {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TextInputField");
    expect(component).toHaveTextContent("harvey was here");
  });
});
