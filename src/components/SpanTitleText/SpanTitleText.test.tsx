// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import SpanTitleText from "./SpanTitleText";
import { SpanTitleTextProps } from "./SpanTitleText.types";
describe("Test Component", () => {
  let props: SpanTitleTextProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<SpanTitleText {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("SpanTitleText");
    expect(component).toHaveTextContent("harvey was here");
  });
});
