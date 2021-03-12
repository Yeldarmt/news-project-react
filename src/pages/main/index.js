import React, {useState} from 'react';
import classNames from 'classnames';
import './index.scss';
import CardNews from "../../components/molecules/CardNews/CardNews";
import {blogsArray, newsArray} from "../../mock";
import CardBlogs from "../../components/molecules/CardBlogs/CardBlogs";
import Slider from "../../components/molecules/Slider/Slider";

function Main() {
  const token = localStorage.getItem('token');
  const localStorageNews = JSON.parse(localStorage.getItem('news'));
  const newsArr = localStorageNews && localStorageNews.length > 0 ? localStorageNews : newsArray;
  const newsPaginationCount = Math.ceil(newsArr.length / 3) || 1;
  const [pageNumber, setPageNumber] = useState( 1);


  const changePageNumber = (num) => {
    setPageNumber(num)
  };
  const decreasePageNumber = (num) => {
    if (num > 0) { setPageNumber(num) }
  };
  const increasePageNumber = (num) => {
    if (num <= newsPaginationCount) { setPageNumber(num) }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <div className="main-slider my-5 d-flex flex-column">
            <Slider/>
          </div>
          <section className="section d-flex">
            <div className="news d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                <span className="section__title">All news</span>
                {token && <a href="/add-news" className="section__add ml-4">Add news</a>}
              </div>
              <div className="d-flex flex-column">
                {newsArr.slice((pageNumber - 1)*3, (pageNumber)*3).map((n) => (
                  <CardNews news={n}/>
                ))}
              </div>
              <div className="news__pagination d-flex">
                <div
                  className="pagination-item"
                  onClick={() => decreasePageNumber(pageNumber - 1)}
                >
                  &lt;
                </div>
                {newsArr.filter((n, index) => index < newsPaginationCount).map((n, i) => (
                  <div
                    className={classNames([
                      'pagination-item',
                      pageNumber === i + 1 && 'pagination-item--selected',
                    ])}
                    onClick={() => changePageNumber(i+1)}
                  >
                    {i + 1}
                  </div>
                ))}
                <div
                  className="pagination-item"
                  onClick={() => increasePageNumber(pageNumber + 1)}
                >
                  &gt;
                </div>
              </div>
            </div>
            <div className="blogs d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                <span className="section__title">Blogs</span>
                {/*{token && <a href="/add-blog" className="section__add ml-4">Add blogs</a>}*/}
              </div>
              <div className="d-flex flex-column">
                {blogsArray.slice(0, 3).map((n) => (
                  <CardBlogs blog={n}/>
                ))}
              </div>
              <div className="blog-subs">
                <div className="blog-subs__text">Subscribe to our blogs</div>
                <div className="blog-subs__follow">Follow the news on HABAR.COM</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Main;
