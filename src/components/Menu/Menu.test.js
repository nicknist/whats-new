import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  it('should show the menu component as a nav bar', () => {
    const wrapper = shallow(<Menu changePage={jest.fn()}/>)

    expect(wrapper).toMatchSnapshot();
  })
})
