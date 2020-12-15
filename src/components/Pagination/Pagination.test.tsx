// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";
import { PaginationProps } from "./Pagination.types";
describe("Test Component", () => {
  let props: PaginationProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Pagination {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Pagination");
    expect(component).toHaveTextContent("harvey was here");
  });
});
