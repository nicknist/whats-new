import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should display the application boilerplate page', () => {
    const wrapper = shallow(<App /> );

    expect(wrapper).toMatchSnapshot();
  });

})
