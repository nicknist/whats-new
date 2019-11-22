import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types'

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = ({ articleInfo }) => {
  return (
    <article>
      <h1>{articleInfo.headline}</h1>
      <img className="headline" src={articleInfo.img} alt='' />
      <p>{articleInfo.description}</p>
      <a href={articleInfo.url}> Link to Article</a>
    </article>
  )
}

NewsArticle.propTypes = {
  articleInfo: PropTypes.object
}

export default NewsArticle;
