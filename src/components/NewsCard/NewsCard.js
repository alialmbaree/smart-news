import React, { useState, useEffect, createRef } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div ref={elRefs[i]} className={`card ${activeArticle === i ? 'active-card' : null}`}>
      <img className='card-img' src={urlToImage || 'https://i2-prod.cambridge-news.co.uk/incoming/article17510071.ece/ALTERNATES/s615/1_Breaking-News.jpg'} alt='News' />
      <div className='heading'>
        <h3>{new Date(publishedAt).toDateString()}</h3>
        <h3>{source.name}</h3>
      </div>
      <h1 className='news-title'>{title}</h1>
      <p className='news-content'>{description}</p>
      <div className='card-bottom'>
        <button className='news-button' onClick={() => window.open(url, '_blank')}>
          Learn More <FaAngleRight />
        </button>
        <h1 className='card-number'>{i + 1}</h1>
      </div>
    </div>
  );
};

export default NewsCard;
