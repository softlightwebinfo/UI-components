// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import OrderedList from "./OrderedList";
import { OrderedListProps } from "./OrderedList.types";
describe("Test Component", () => {
  let props: OrderedListProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<OrderedList {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("OrderedList");
    expect(component).toHaveTextContent("harvey was here");
  });
});
