import './NewsCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const NewsCard = ({ card, savedNews, isLoggedIn }) => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  return (
    <li className='card'>
      <button
        className={
          savedNews && location.pathname === '/saved-news'
            ? 'card__keyword'
            : 'card__keyword_hide'
        }
      >
        {card.keyword}
      </button>
      <button
        className={
          isClicked && !savedNews && !isLoggedIn
            ? 'card__signin'
            : 'card__signin_hide'
        }
      >
        Sign in to save articles
      </button>
      <button
        className={
          savedNews && location.pathname === '/saved-news'
            ? 'card__button_delete ' && isClicked
              ? 'card__button_delete card__button_delete-black'
              : 'card__button_delete'
            : isClicked && isLoggedIn
            ? 'card__button card__button_mark-fill'
            : 'card__button' && isClicked
            ? 'card__button card__button_mark-black'
            : 'card__button'
        }
        onClick={() => setIsClicked(!isClicked)}
      ></button>
      <button
        className={
          isClicked && savedNews && !isLoggedIn
            ? 'card__remove'
            : 'card__remove_hide'
        }
      >
        Remove from saved
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
