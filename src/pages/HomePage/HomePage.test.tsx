// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";
import { HomePageProps } from "./HomePage.types";
describe("Test Component", () => {
  let props: HomePageProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<HomePage {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("HomePage");
    expect(component).toHaveTextContent("harvey was here");
  });
});
