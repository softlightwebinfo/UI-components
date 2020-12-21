// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardListCategoriesWidget from "./CardListCategoriesWidget";
import { CardListCategoriesWidgetProps } from "./CardListCategoriesWidget.types";
describe("Test Component", () => {
  let props: CardListCategoriesWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardListCategoriesWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardListCategoriesWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
