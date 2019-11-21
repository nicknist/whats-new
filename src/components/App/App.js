import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      currentPage: 'local',
      fullData: {
        local: [],
      },
      error: null,
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => {
        this.setState({ fullData: data, isLoading: false })
      })
      .catch(error => this.setState({ error, isLoading: false}))
  }

  changePage = (event) => {
    this.setState({
      currentPage: event.target.id
     })
  }

  searchArticle = (input) => {
    const { fullData } = this.state;
    const searchedArticles = this.state.fullData[this.state.currentPage].filter(data =>  data.description.toUpperCase().includes(input.toUpperCase()));

    this.setState({
      currentPage: 'filtered',
      fullData: {
        ...fullData,
        filtered: searchedArticles
      }
    });
  }

  changeInput = (event) => {
    this.setState({ search: event.target.value });
  }

  render () {
    if (this.state.isLoading) {
      return <div className="loading-ring app-load"></div>
    }

    if (this.state.error) {
      return <p>There was an error loading the Page</p>
    }

    return (
      <div className="app">
        <Menu changePage={this.changePage} />
        <SearchForm searchArticle={this.searchArticle} changeInput={this.changeInput} currentInput={this.state.search}/>
        <NewsContainer data={this.state.fullData[this.state.currentPage]} />
      </div>
    );
  }
}

export default App;
