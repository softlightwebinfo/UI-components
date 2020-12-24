// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import FullPage from "./FullPage";
import { FullPageProps } from "./FullPage.types";
describe("Test Component", () => {
  let props: FullPageProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<FullPage {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("FullPage");
    expect(component).toHaveTextContent("harvey was here");
  });
});
