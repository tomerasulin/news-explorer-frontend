import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';

const NewsCardList = ({
  isSavedNews,
  isLoggedIn,
  text,
  articles,
  keyword,
  savedArticles,
  onPopupClick,
  rerenderNews,
}) => {
  const [numOfElements, setNumOfElements] = useState(3);

  function handleShowMoreButton() {
    setNumOfElements(numOfElements + 3);
  }

  return (
    articles.length !== 0 && (
      <section
        className={isSavedNews ? 'cardlist cardlist__saved-news' : 'cardlist'}
      >
        <h2
          className={
            isSavedNews
              ? 'cardlist__title cardlist__title_hide'
              : 'cardlist__title'
          }
        >
          Search results
        </h2>
        <ul className='cardlist__cards'>
          {articles.slice(0, numOfElements).map((card, index) => (
            <NewsCard
              key={index}
              card={card}
              isSavedNews={isSavedNews}
              isLoggedIn={isLoggedIn}
              buttonText={text}
              keyword={keyword}
              savedArticles={savedArticles}
              onPopupClick={onPopupClick}
              rerenderNews={rerenderNews}
            />
          ))}
        </ul>
        <button
          className={
            numOfElements >= articles.length
              ? 'cardlist__button_hide'
              : 'cardlist__button'
          }
          onClick={handleShowMoreButton}
        >
          Show more
        </button>
      </section>
    )
  );
};

export default NewsCardList;
