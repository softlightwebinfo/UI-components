// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import SectionInfoLayout from "./SectionInfoLayout";
import { SectionInfoLayoutProps } from "./SectionInfoLayout.types";
describe("Test Component", () => {
  let props: SectionInfoLayoutProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<SectionInfoLayout {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("SectionInfoLayout");
    expect(component).toHaveTextContent("harvey was here");
  });
});
