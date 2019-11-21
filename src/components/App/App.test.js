import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should display the loading screen page', () => {
    const wrapper = shallow(<App /> );
    wrapper.setState({ isLoading: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should display an error message when error happens', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ isLoading: false, error: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should display main page when not loading and no error', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ error: false, isLoading: false });

    expect(wrapper).toMatchSnapshot();
  })

})
