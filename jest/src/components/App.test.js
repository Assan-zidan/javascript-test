import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'

it("App snapshot test", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});