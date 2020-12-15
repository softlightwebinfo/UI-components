// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import TimelineMarker from "./TimelineMarker";
import { TimelineMarkerProps } from "./TimelineMarker.types";
describe("Test Component", () => {
  let props: TimelineMarkerProps;
  beforeEach(() => {
    props = {
      
    };
  });
  const renderComponent = () => render(<TimelineMarker {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TimelineMarker");
    expect(component).toHaveTextContent("harvey was here");
  });
});
