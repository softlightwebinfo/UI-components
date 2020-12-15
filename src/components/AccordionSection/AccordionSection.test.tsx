// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import AccordionSection from "./AccordionSection";
import { AccordionSectionProps } from "./AccordionSection.types";
describe("Test Component", () => {
  let props: AccordionSectionProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<AccordionSection {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AccordionSection");
    expect(component).toHaveTextContent("harvey was here");
  });
});
