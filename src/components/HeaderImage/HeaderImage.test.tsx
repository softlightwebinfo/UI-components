// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import HeaderImage from "./HeaderImage";
import { HeaderImageProps } from "./HeaderImage.types";
describe("Test Component", () => {
  let props: HeaderImageProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<HeaderImage {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("HeaderImage");
    expect(component).toHaveTextContent("harvey was here");
  });
});
