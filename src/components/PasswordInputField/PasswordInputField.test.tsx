// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import PasswordInputField from "./PasswordInputField";
import { PasswordInputFieldProps } from "./PasswordInputField.types";
describe("Test Component", () => {
  let props: PasswordInputFieldProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<PasswordInputField {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("PasswordInputField");
    expect(component).toHaveTextContent("harvey was here");
  });
});
