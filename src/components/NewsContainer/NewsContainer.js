import React from 'react';
import './NewsContainer.css';
import NewsArticle from './../NewsArticle/NewsArticle'
import PropTypes from 'prop-types'

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = ({ data }) => {
  const newsArticles = data.map(article => {
    return <NewsArticle
            key={article.url}
            articleInfo={article}
          />
  })

  return (
    <main className="news-container">
      {newsArticles}
    </main>
  )
}

NewsContainer.propTypes = {
  data: PropTypes.array
}

export default NewsContainer;
