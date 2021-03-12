import React, {useState} from 'react';
import moment from 'moment';
import './index.scss';
import {categories, newsArray} from "../../mock";

function AddNews() {
  const [title, setTitle] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [textValue, setTextValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [newsAddedSuccess, setNewsAddedSuccess] = useState(false);

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  };

  const onImgLinkChange = (e) => {
    setImgLink(e.target.value);
  };

  const onTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const onSelectedCategory = (ctg) => {
    if (selectedCategories.includes(ctg)) {
      let newCategories = selectedCategories.filter((n) => n !== ctg);
      setSelectedCategories(newCategories);
    } else {
      setSelectedCategories([...selectedCategories, ctg]);
    }
  };

  const onAddNewsClick = () => {
    const news = {
      title: title,
      imgSrc: imgLink,
      content: textValue,
      createdDate: moment().format(('DD.MM.YYYY hh:mm')) || '12.03.2021 14:45',
      categories: selectedCategories,
    };
    newsArray.push(news);
    localStorage.setItem('news', JSON.stringify(newsArray));
    setNewsAddedSuccess(true);
  };

  return (
    <div className="add-news">
      <div className="container">
        <a href="/" className="add-news__href">Back to main</a>
        <div className="add-news__title text-center">Create new news</div>
        <div className="d-flex justify-content-between">
          <div className="add-news__block">
            <label>News title</label>
            <input
              className="add-news__input"
              value={title}
              onChange={onTitleChange}
            />
          </div>
          <div className="add-news__block">
            <label>News image source</label>
            <input
              className="add-news__input"
              value={imgLink}
              onChange={onImgLinkChange}
            />
          </div>
        </div>
        <div className="add-news__content d-flex flex-column mt-5">
          <label>News content</label>
          <textarea
            className="add-news__text-area"
            value={textValue}
            onChange={onTextChange}
          />
        </div>
        <div className='mt-5'>
          <span>Choose the categories of news</span>
          <div className="add-news__categories d-flex">
            {categories.map((n) => (
              <div className="d-flex align-items-center mr-5">
                <input
                  type="checkbox"
                  onChange={() => onSelectedCategory(n)}
                />
                <span className="ml-3">{n}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <button
            className="add-news__btn"
            disabled={!title || !imgLink || !textValue || (selectedCategories && selectedCategories.length < 1)}
            onClick={onAddNewsClick}
          >
            Create
          </button>
        </div>
        {newsAddedSuccess && (
          <div className="d-flex justify-content-center mt-5">
            <h3 className="text-success">News added successfully!</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddNews;
