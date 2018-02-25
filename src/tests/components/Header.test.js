import React from 'react';
import {shallow} from 'enzyme';
// import toJson from 'enzyme-to-json';
import {Header} from '../../components/Header.js';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // // console.log(renderer.getRenderOutput());
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});