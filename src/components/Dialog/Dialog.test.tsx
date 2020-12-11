// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Dialog from "./Dialog";
import { DialogProps } from "./Dialog.types";
describe("Test Component", () => {
  let props: DialogProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Dialog {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Dialog");
    expect(component).toHaveTextContent("harvey was here");
  });
});
