import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  it('should make the search bar with a header tag', () => {
    const wrapper = shallow(<SearchForm searchArticle={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })
})
