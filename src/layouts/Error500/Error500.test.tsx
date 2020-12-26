// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Error500 from "./Error500";
import { Error500Props } from "./Error500.types";
describe("Test Component", () => {
  let props: Error500Props;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Error500 {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Error500");
    expect(component).toHaveTextContent("harvey was here");
  });
});
