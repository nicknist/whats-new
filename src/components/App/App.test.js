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
  });

  it('should be able to switch the page based on what is clicked', () => {
    const wrapper = shallow(<App />);
    const mockEvent = { target: { id: 'technology' }};
    wrapper.setState({
      fullData: { local: [], technology: [] },
      currentPage: 'local',
    });

    expect(wrapper.state('currentPage')).toEqual('local');

    wrapper.instance().changePage(mockEvent);

    expect(wrapper.state('currentPage')).toEqual('technology');
  });

  it('should be able to search an article and find the filtered articles', () => {
    const wrapper = shallow(<App />);
    const mockState = {
      currentPage: 'local',
      fullData: {
        local: [
          {
            id: 1,
            headline: "The Who postpones Denver Concert at the Pepsi Center",
            img: "https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg",
            description: "Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.",
            url: "https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/"
          },
          {
            id: 2,
            headline: "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner",
            img: "https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376",
            description: "The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.",
            url: "https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/"
          },
          {
            id: 3,
            headline: "Car2Go leaving Denver amid company shake-up",
            img: "https://www.denverpost.com/wp-content/uploads/2017/06/cd20carsharingdsc_8786.jpg?w=859",
            description: "Car2Go, the popular car-sharing and rental company, will be leaving Denver at the end of the October, the company announced Friday.",
            url: "https://www.denverpost.com/2019/09/27/car2go-leaving-denver/"
          }
        ]
      }
    };

    const expected = [{
      id: 1,
      headline: "The Who postpones Denver Concert at the Pepsi Center",
      img: "https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg",
      description: "Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.",
      url: "https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/"
    }]

    wrapper.setState(mockState);

    wrapper.instance().searchArticle('band');

    expect(wrapper.state('fullData').filtered).toEqual(expected);
  });

  it('should be able to change the search based on an input', () => {
    const wrapper = shallow(<App />);
    const mockEvent = { target: { value: 'Kayla' }};

    wrapper.instance().changeInput(mockEvent);

    expect(wrapper.state('search')).toEqual('Kayla');
  })

})
