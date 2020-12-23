// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Image from "./Image";
import { ImageProps } from "./Image.types";
describe("Test Component", () => {
  let props: ImageProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Image {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Image");
    expect(component).toHaveTextContent("harvey was here");
  });
});
