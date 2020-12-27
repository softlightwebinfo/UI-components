// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Blog from "./Blog";
import { BlogProps } from "./Blog.types";
describe("Test Component", () => {
  let props: BlogProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Blog {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Blog");
    expect(component).toHaveTextContent("harvey was here");
  });
});
