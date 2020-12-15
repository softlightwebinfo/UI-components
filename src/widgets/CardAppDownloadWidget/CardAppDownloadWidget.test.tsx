// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardAppDownloadWidget from "./CardAppDownloadWidget";
import { CardAppDownloadWidgetProps } from "./CardAppDownloadWidget.types";
describe("Test Component", () => {
  let props: CardAppDownloadWidgetProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<CardAppDownloadWidget {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardAppDownloadWidget");
    expect(component).toHaveTextContent("harvey was here");
  });
});
