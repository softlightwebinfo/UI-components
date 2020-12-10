// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";
import { AvatarGroupProps } from "./AvatarGroup.types";
describe("Test Component", () => {
  let props: AvatarGroupProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<AvatarGroup {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AvatarGroup");
    expect(component).toHaveTextContent("harvey was here");
  });
});
