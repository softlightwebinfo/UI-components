// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import TabSidebar from "./TabSidebar";
import { TabSidebarProps } from "./TabSidebar.types";
describe("Test Component", () => {
  let props: TabSidebarProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<TabSidebar {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TabSidebar");
    expect(component).toHaveTextContent("harvey was here");
  });
});
