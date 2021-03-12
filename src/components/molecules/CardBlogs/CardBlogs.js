import React from 'react';
import './index.scss';

function CardBlogs(props) {
  const {blog} = props;
  return (
    <div className="card-blogs d-flex">
      <img src={blog.authorAvatar} alt="photo news" className="card-blogs__img"/>
      <div className="card-blogs__content d-flex flex-column">
        <div className="card-blogs__content__title">{blog.author}</div>
        <div className="card-blogs__content__text">
          {blog.content}
        </div>
        <a href="#" className="card-blogs__content__read-more">Read More</a>
        <div className="card-blogs__content__date">Posted at {blog.createdDate} at {blog.createdTime}</div>
      </div>
    </div>
  )
}

export default CardBlogs;
