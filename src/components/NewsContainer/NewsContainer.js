import React from 'react';
import './NewsContainer.css';
import NewsArticle from './../NewsArticle/NewsArticle'

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

export default NewsContainer;
