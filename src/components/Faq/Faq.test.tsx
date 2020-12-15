// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Faq from "./Faq";
import { FaqProps } from "./Faq.types";
describe("Test Component", () => {
  let props: FaqProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Faq {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Faq");
    expect(component).toHaveTextContent("harvey was here");
  });
});
