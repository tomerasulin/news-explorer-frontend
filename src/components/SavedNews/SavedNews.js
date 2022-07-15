import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';

const SavedNews = () => {
  return (
    <main className='news'>
      <NewsCardList isSavedNews={true} />
    </main>
  );
};

export default SavedNews;
