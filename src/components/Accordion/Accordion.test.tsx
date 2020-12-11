// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";
describe("Test Component", () => {
  let props: AccordionProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Accordion {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Accordion");
    expect(component).toHaveTextContent("harvey was here");
  });
});
