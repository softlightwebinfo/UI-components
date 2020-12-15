// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import ActivityTimeline from "./ActivityTimeline";
import { ActivityTimelineProps } from "./ActivityTimeline.types";
describe("Test Component", () => {
  let props: ActivityTimelineProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<ActivityTimeline {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("ActivityTimeline");
    expect(component).toHaveTextContent("harvey was here");
  });
});
