// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import TabContent from "./TabContent";
import { TabContentProps } from "./TabContent.types";
describe("Test Component", () => {
  let props: TabContentProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<TabContent {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TabContent");
    expect(component).toHaveTextContent("harvey was here");
  });
});
