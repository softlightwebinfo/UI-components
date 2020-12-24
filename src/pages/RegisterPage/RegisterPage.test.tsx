// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import { RegisterPageProps } from "./RegisterPage.types";
describe("Test Component", () => {
  let props: RegisterPageProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<RegisterPage {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("RegisterPage");
    expect(component).toHaveTextContent("harvey was here");
  });
});
