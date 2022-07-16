import './NewsCardList.css';
import { initialCards } from '../../utils/cards';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ isSavedNews, isLoggedIn, text }) => {
  return (
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
        {initialCards.map((card) => (
          <NewsCard
            key={card._id}
            card={card}
            isSavedNews={isSavedNews}
            isLoggedIn={isLoggedIn}
            buttonText={text}
          />
        ))}
      </ul>
      <button className='cardlist__button'>Show more</button>
    </section>
  );
};

export default NewsCardList;
