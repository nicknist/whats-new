import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'technology',
      local,
      health,
      entertainment,
      science,
      technology,
      filterArticles: []
    }
  }

  changePage = (event) => {
    this.setState({ currentPage: [event.target.id] })
  }

  searchArticle = () => {
    const input = document.getElementById('search').value;
    const searchedArticles = this.state[this.state.currentPage].filter(data =>  data.description.toUpperCase().includes(input.toUpperCase()));
    console.log(searchedArticles);
    this.setState({ filterArticles: searchedArticles })
  }

  render () {
    return (
      <div className="app">
        <Menu changePage={this.changePage} />
        <SearchForm searchArticle={this.searchArticle}/>
        <NewsContainer data={this.state[this.state.currentPage]} />
      </div>
    );
  }
}

export default App;
