// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import AsideHeader from "./AsideHeader";
import { AsideHeaderProps } from "./AsideHeader.types";
describe("Test Component", () => {
  let props: AsideHeaderProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<AsideHeader {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AsideHeader");
    expect(component).toHaveTextContent("harvey was here");
  });
});
