// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import HeaderLayout from "./HeaderLayout";
import { HeaderLayoutProps } from "./HeaderLayout.types";
describe("Test Component", () => {
  let props: HeaderLayoutProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<HeaderLayout {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("HeaderLayout");
    expect(component).toHaveTextContent("harvey was here");
  });
});
