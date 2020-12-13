// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import HeaderHorizontalMain from "./HeaderHorizontalMain";
import { HeaderHorizontalMainProps } from "./HeaderHorizontalMain.types";
describe("Test Component", () => {
  let props: HeaderHorizontalMainProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<HeaderHorizontalMain {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("HeaderHorizontalMain");
    expect(component).toHaveTextContent("harvey was here");
  });
});
