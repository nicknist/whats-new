import React from 'react';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {
  it('should create the UI for a news article', () => {
    const articleObject = {
      id: 1,
      headline: 'Mock Headline 1',
      img: 'fakeurl.com',
      description: 'Fake fake stuff.',
      url: 'anotherfakeurl.net'
    }
    const wrapper = shallow(<NewsArticle articleInfo={articleObject}/>)

    expect(wrapper).toMatchSnapshot();
  })
})
