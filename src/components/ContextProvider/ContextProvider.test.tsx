// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import ContextProvider from "./ContextProvider";
import { ContextProviderProps } from "./ContextProvider.types";
describe("Test Component", () => {
  let props: ContextProviderProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<ContextProvider {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("ContextProvider");
    expect(component).toHaveTextContent("harvey was here");
  });
});
