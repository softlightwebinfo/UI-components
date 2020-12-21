// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import RowLabelCount from "./RowLabelCount";
import { RowLabelCountProps } from "./RowLabelCount.types";
describe("Test Component", () => {
  let props: RowLabelCountProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<RowLabelCount {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("RowLabelCount");
    expect(component).toHaveTextContent("harvey was here");
  });
});
