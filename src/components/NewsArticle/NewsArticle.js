import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = ({ articleInfo }) => {
  return (
    <article>
      <h1>{articleInfo.headline}</h1>
      <img className="headline" src={articleInfo.img} alt="Photo based on Headline" />
      <p>{articleInfo.description}</p>
      <a href={articleInfo.url}> Link to Article</a>
    </article>
  )
}

export default NewsArticle;
