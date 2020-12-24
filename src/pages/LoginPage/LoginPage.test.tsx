// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { LoginPageProps } from "./LoginPage.types";
describe("Test Component", () => {
  let props: LoginPageProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<LoginPage {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("LoginPage");
    expect(component).toHaveTextContent("harvey was here");
  });
});
