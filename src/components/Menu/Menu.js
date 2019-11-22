import React from 'react';
import './Menu.css'
import location from '../../icons/location.svg'
import brain from '../../icons/brain.png'
import movie from '../../icons/movie.png'
import rocket from '../../icons/rocket.png'
import heart from '../../icons/heart.png'
import PropTypes from 'prop-types'

// MENU COMPONENT CODE GOES HERE

const Menu = ({ changePage }) => {
  return (
    <nav className="menu">
      <label onClick={changePage} id="local" className="item">
        <img className="icon" src={location} alt="Location Icon"/>
        Local News
      </label>
      <label onClick={changePage} id="technology" className="item">
        <img src={brain} className="icon" alt="Technology Icon"/>
        Technology
      </label>
      <label onClick={changePage} id="entertainment" className="item">
        <img src={movie} className="icon" alt="Entertainment Icon"/>
        Entertainment
      </label>
      <label onClick={changePage} id="science" className="item">
        <img src={rocket} className="icon" alt="Science Icon"/>
        Science
      </label>
      <label onClick={changePage} id="health" className="item">
        <img src={heart} className="icon" alt="Health Icon"/>
        Health
      </label>
    </nav>
  )
}

Menu.propTypes = {
  changePage: PropTypes.func
}

export default Menu;
