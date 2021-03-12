import React, {useState} from 'react';
import './index.scss'
import Carousel from "react-bootstrap/Carousel";
import {newsArray} from "../../../mock";

function Slider() {
  const localStorageNews = JSON.parse(localStorage.getItem('news'));
  const newsArr = localStorageNews && localStorageNews.length > 0 ? localStorageNews : newsArray;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {newsArr.map((n) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={n.imgSrc}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carousel-content">
              <h3>{n.title}</h3>
              <p>{n.content}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider;
