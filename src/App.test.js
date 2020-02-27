import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("<App /> rendering", () => {
  it("should render all chalid components", () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
