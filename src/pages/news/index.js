import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {newsArray} from "../../mock";
import CardNews from "../../components/molecules/CardNews/CardNews";
import './index.scss'

function News(props) {
  const localStorageNews = JSON.parse(localStorage.getItem('news'));
  const newsArr = localStorageNews && localStorageNews.length > 0 ? localStorageNews : newsArray;
  const maxItemToShow = 4;
  // const [category, setCategory] = useState('');
  const [itemsToShow, setItemsToShow] = React.useState(maxItemToShow);
  const [filteredArray, setFilteredArray] = React.useState(newsArray);
  useEffect(
    () => {
      if (props) {
        let query = new URLSearchParams(props.location.search);
        let category = query.get('category');
        if (category) {
          const fArray = newsArr.filter((n) => n.categories.includes(category));
          setFilteredArray(fArray);
        }
      }
    },
    [props],
  );

  const expandClick = () => {
    setItemsToShow(itemsToShow + 4);
  };

  return (
    <div className="news">
      <div className="container">
        <div className="news__title text-center">All news page</div>
        {filteredArray.slice(0, itemsToShow).map((n) => (
          <CardNews news={n} showCategory={true}/>
        ))}
        {filteredArray.length > itemsToShow && (
          <button
            onClick={expandClick}
            className="news__btn mb-4"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  )
}

export default withRouter(News);
