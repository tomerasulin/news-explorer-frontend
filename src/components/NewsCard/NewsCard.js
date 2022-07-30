import './NewsCard.css';
import { useState } from 'react';

const NewsCard = ({ card, isSavedNews, isLoggedIn, buttonText }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <li className='card'>
      <button
        className={
          isSavedNews
            ? 'card__button card__button_keyword'
            : 'card__button_keyword_hide'
        }
      >
        {card.keyword}
      </button>
      <button
        className={
          isSavedNews
            ? 'card__button card__button_delete '
            : isLoggedIn && isClicked
            ? 'card__button card__button_mark card__button_mark-fill'
            : 'card__button card__button_mark'
        }
        onClick={() => setIsClicked(!isClicked)}
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

      <img className='card__image' src={card.image} alt='' />
      <p className='card__date'>{card.date}</p>
      <h3 className='card__title'>{card.title}</h3>
      <p className='card__text'>{card.text}</p>
      <p className='card__author'>{card.author}</p>
    </li>
  );
};

export default NewsCard;
