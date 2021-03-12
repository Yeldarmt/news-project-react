import React from 'react';
import './index.scss'

function CardNews(props) {
  const {news, showCategory} = props;
  return (
    <div className="card-news d-flex">
      <img src={news.imgSrc} alt="photo news" className="card-news__img"/>
      <div className="card-news__content d-flex flex-column">
        <div className="card-news__content__title">{news.title}</div>
        <div className="card-news__content__text">{news.content}</div>
        {showCategory && <div className="card-news__content__categories"><b>Categories:</b> {news.categories.join(', ')}</div>}
        <div className="card-news__content__date">{news.createdDate}</div>
      </div>
    </div>
  )
}

export default CardNews;
