import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedNews = ({ isLoggedIn, savedArticles, rerenderNews }) => {
  const [keywords, setKeywords] = useState([]);
  const [isLargerKeywords, setIsLargerKeywords] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (savedArticles) {
      const mapKeywords = new Map();
      savedArticles.map((article) => {
        mapKeywords.set(
          article.keyword,
          mapKeywords.get(article.keyword)
            ? mapKeywords.get(article.keyword) + 1
            : 1
        );
      });
      const sortedMapKeywords = new Map(
        [...mapKeywords.entries()].sort((a, b) => b[1] - a[1])
      );
      if (sortedMapKeywords.size > 3) {
        setIsLargerKeywords(true);
      } else {
        setIsLargerKeywords(false);
      }
      setKeywords(Array.from(sortedMapKeywords.keys()));
    }
  }, [savedArticles]);

  return (
    <main className='news'>
      <div className='news__summary'>
        <p className='news__subtitle'>Saved articles</p>
        <h2 className='news__title'>
          {currentUser.username}, you have {savedArticles.length} saved articles
        </h2>
        <p className='news__keyword'>
          By keywords:
          <b>
            {isLargerKeywords
              ? `${keywords.slice(0, 2)} and ${keywords.length - 2} other`
              : `${keywords.slice(0, 3)}`}
          </b>
        </p>
      </div>
      <NewsCardList
        isSavedNews={true}
        isLoggedIn={isLoggedIn}
        text='Remove from saved'
        articles={savedArticles}
        rerenderNews={rerenderNews}
      />
    </main>
  );
};

export default SavedNews;
