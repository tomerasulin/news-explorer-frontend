import './NewsCard.css';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';

const NewsCard = ({
  card,
  isSavedNews,
  isLoggedIn,
  buttonText,
  keyword,
  savedArticles,
  onPopupClick,
  rerenderNews,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [date, setDate] = useState(
    isSavedNews ? card.date : card.publishedAt.split('T')[0]
  );
  const [isSavedArticle, setIsSavedArticle] = useState(false);

  const isMarked = savedArticles
    ? savedArticles.find((article) => article.title === card.title)
    : null;

  const articleMarkButtonClassName = `card__button ${
    isMarked ? 'card__button_mark-fill' : 'card__button_mark'
  }`;

  useEffect(() => {
    // if (savedArticles) {
    //   savedArticles.forEach((article) => {
    //     if (article.title === card.title) {
    //       setIsSavedArticle(true);
    //     }
    //   });
    // }
    if (!isSavedNews) {
      const newDate = new Date(card.publishedAt.split('T')[0]);
      const month = newDate.toLocaleString('default', { month: 'long' });
      const day = newDate.getDate();
      const year = newDate.getFullYear();
      setDate(month + ' ' + day + ',' + year);
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (isLoggedIn) {
      if (!isSavedNews && !isMarked) {
        mainApi
          .saveArticle({
            keyword,
            title: card.title,
            text: card.description,
            date,
            source: card.source.name,
            link: card.url,
            image: card.urlToImage,
          })
          .then(() => {
            setIsSavedArticle(true);
            rerenderNews();
          })
          .catch(console.log);
      } else if (isMarked) {
        mainApi
          .deleteArticle(isMarked._id)
          .then(() => {
            setIsSavedArticle(false);
            rerenderNews();
          })
          .catch(console.log);
      } else {
        mainApi
          .deleteArticle(card._id)
          .then(() => {
            rerenderNews();
          })
          .catch(console.log);
      }
      setIsClicked(!isClicked);
    } else {
      onPopupClick();
    }
  }

  return (
    <li className='card'>
      <button
        className={
          isSavedNews
            ? 'card__button card__button_keyword'
            : 'card__button_keyword_hide'
        }
      >
        {isSavedNews ? card.keyword : keyword}
      </button>
      <button
        className={
          isSavedNews
            ? 'card__button card__button_delete '
            : articleMarkButtonClassName
        }
        onClick={handleClick}
      />
      <button
        className={
          isSavedNews
            ? 'card__button_text'
            : isLoggedIn
            ? 'card__button_text_hide'
            : 'card__button_text'
        }
      >
        {buttonText}
      </button>

      <img
        className='card__image'
        src={isSavedNews ? card.image : card.urlToImage}
        alt={'image of ' + isSavedNews ? card.source : card.source.name}
      />
      <p className='card__date'>{date}</p>
      <h3 className='card__title'>{card.title}</h3>
      <p className='card__text'>{isSavedNews ? card.text : card.description}</p>
      <p className='card__author'>
        {isSavedNews ? card.source : card.source.name}
      </p>
    </li>
  );
};

export default NewsCard;
