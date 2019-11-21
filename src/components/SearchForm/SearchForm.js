import React from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

const SearchForm = ({ searchArticle, changeInput, currentInput }) =>  {
  return (
    <header>
      <h1>Whats <span className="yellow">New?</span></h1>
      <form className="search-form">
        <label className="search-bar">
          <input onChange={changeInput} id="search" type="text" placeholder="Search for news article here"/>
        </label>
        <button onClick={() => searchArticle(currentInput)} type="button">Search</button>
      </form>
    </header>
  )
}

export default SearchForm;
