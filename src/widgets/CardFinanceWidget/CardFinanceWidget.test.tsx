// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardFinanceWidget from "./CardFinanceWidget";
import { CardFinanceWidgetProps } from "./CardFinanceWidget.types";
describe("Test Component", () => {
  let props: CardFinanceWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardFinanceWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardFinanceWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
