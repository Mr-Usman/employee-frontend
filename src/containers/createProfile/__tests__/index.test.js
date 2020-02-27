import React from "react";
import CreateProfile from "../index";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("renders <CreateProfile /> Component", () => {
  it("match the snapshot", () => {
    const tree = renderer.create(<CreateProfile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
