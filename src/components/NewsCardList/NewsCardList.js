import './NewsCardList.css';
import { initialCards } from '../../utils/cards';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ isSavedNews, isLoggedIn }) => {
  return (
    <section className={isSavedNews ? 'cardlist__saved-news' : 'cardlist'}>
      <h2 className={isSavedNews ? 'cardlist__title_hide' : 'cardlist__title'}>Search results</h2>
      <ul className='cardlist__cards'>
        {initialCards.map((card) => (
          <NewsCard
            key={card._id}
            card={card}
            savedNews={isSavedNews}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
      <button className='cardlist__button'>Show more</button>
    </section>
  );
};

export default NewsCardList;
