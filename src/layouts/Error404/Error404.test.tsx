// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Error404 from "./Error404";
import { Error404Props } from "./Error404.types";
describe("Test Component", () => {
  let props: Error404Props;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Error404 {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Error404");
    expect(component).toHaveTextContent("harvey was here");
  });
});
