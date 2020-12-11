// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CloseButton from "./CloseButton";
import { CloseButtonProps } from "./CloseButton.types";
describe("Test Component", () => {
  let props: CloseButtonProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CloseButton {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CloseButton");
    expect(component).toHaveTextContent("harvey was here");
  });
});
