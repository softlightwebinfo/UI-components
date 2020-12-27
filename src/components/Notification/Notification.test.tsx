// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Notification from "./Notification";
import { NotificationProps } from "./Notification.types";
describe("Test Component", () => {
  let props: NotificationProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<Notification {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Notification");
    expect(component).toHaveTextContent("harvey was here");
  });
});
