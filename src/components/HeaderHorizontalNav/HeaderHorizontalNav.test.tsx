// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import HeaderHorizontalNav from "./HeaderHorizontalNav";
import { HeaderHorizontalNavProps } from "./HeaderHorizontalNav.types";
describe("Test Component", () => {
  let props: HeaderHorizontalNavProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<HeaderHorizontalNav {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("HeaderHorizontalNav");
    expect(component).toHaveTextContent("harvey was here");
  });
});
