// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import FullPageTemplate from "./FullPageTemplate";
import { FullPageTemplateProps } from "./FullPageTemplate.types";
describe("Test Component", () => {
  let props: FullPageTemplateProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<FullPageTemplate {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("FullPageTemplate");
    expect(component).toHaveTextContent("harvey was here");
  });
});
