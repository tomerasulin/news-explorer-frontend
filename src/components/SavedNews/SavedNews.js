import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';

const SavedNews = ({ isLoggedIn }) => {
  return (
    <main className='news'>
      <NewsCardList
        isSavedNews={true}
        isLoggedIn={isLoggedIn}
        text='Remove from saved'
      />
    </main>
  );
};

export default SavedNews;
