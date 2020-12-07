// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import { BreadcrumbProps } from "./Breadcrumb.types";
describe("Test Component", () => {
  let props: BreadcrumbProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Breadcrumb {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Breadcrumb");
    expect(component).toHaveTextContent("harvey was here");
  });
});
