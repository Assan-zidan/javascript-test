import React from "react";
import Grid from "./Grid";
import renderer from "react-test-renderer";

it("Grid snapshot test", () => {
  const component = renderer.create(<Grid />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
