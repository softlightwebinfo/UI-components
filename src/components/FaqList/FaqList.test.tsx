// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import FaqList from "./FaqList";
import { FaqListProps } from "./FaqList.types";
describe("Test Component", () => {
  let props: FaqListProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<FaqList {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("FaqList");
    expect(component).toHaveTextContent("harvey was here");
  });
});
