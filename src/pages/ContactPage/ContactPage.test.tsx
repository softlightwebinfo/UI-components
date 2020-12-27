// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import ContactPage from "./ContactPage";
import { ContactPageProps } from "./ContactPage.types";
describe("Test Component", () => {
  let props: ContactPageProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<ContactPage {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("ContactPage");
    expect(component).toHaveTextContent("harvey was here");
  });
});
