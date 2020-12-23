// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Col from "./Col";
import { ColProps } from "./Col.types";
describe("Test Component", () => {
  let props: ColProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Col {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Col");
    expect(component).toHaveTextContent("harvey was here");
  });
});
