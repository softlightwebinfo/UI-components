// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import AvatarUser from "./AvatarUser";
import { AvatarUserProps } from "./AvatarUser.types";
describe("Test Component", () => {
  let props: AvatarUserProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<AvatarUser {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AvatarUser");
    expect(component).toHaveTextContent("harvey was here");
  });
});
