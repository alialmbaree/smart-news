import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import InfoCards from '../InfoCards/InfoCards';

const NewsCards = ({ articles, activeArticle }) => {
  if (articles.length === 0) {
    return <InfoCards />;
  }

  return (
    <div className='cards-container'>
      {articles.map((article, i) => (
        <NewsCard key={i} article={article} activeArticle={activeArticle} i={i} />
      ))}
    </div>
  );
};

export default NewsCards;
