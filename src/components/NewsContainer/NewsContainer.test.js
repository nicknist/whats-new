import React from 'react';
import NewsContainer from './NewsContainer';
import { shallow } from 'enzyme';

describe('NewsContainer', () => {
  it('should create to area for all the articles to be in', () => {
    const mockData = [
      {
        id: 1,
        headline: 'Mock Headline 1',
        img: 'fakeurl.com',
        description: 'Fake fake stuff.',
        url: 'anotherfakeurl.net'
      },
      {
        id: 2,
        headline: 'Mock Headline 2',
        img: 'fakeurl2.com',
        description: 'More fake stuff',
        url: 'anotherfakeurl2.net'
      }
    ];
    const wrapper = shallow(<NewsContainer data={mockData}/>)

    expect(wrapper).toMatchSnapshot();
  })
})
