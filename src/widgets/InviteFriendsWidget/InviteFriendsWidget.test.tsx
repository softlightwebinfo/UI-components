// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import InviteFriendsWidget from "./InviteFriendsWidget";
import { InviteFriendsWidgetProps } from "./InviteFriendsWidget.types";
describe("Test Component", () => {
  let props: InviteFriendsWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<InviteFriendsWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("InviteFriendsWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
