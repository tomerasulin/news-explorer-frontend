import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './Main.css';

const Main = ({
  isLoggedIn,
  isSearching,
  isNewsNotFound,
  articles,
  keyword,
  error,
  savedArticles,
  onPopupClick,
  rerenderNews,
}) => {
  return (
    <main className='main'>
      {isSearching && <Preloader />}
      {isNewsNotFound && (
        <NotFound errorTitle={error.title} errorContent={error.content} />
      )}
      <NewsCardList
        articles={articles}
        isSavedNews={false}
        isLoggedIn={isLoggedIn}
        text='Sign in to save articles'
        keyword={keyword}
        savedArticles={savedArticles}
        onPopupClick={onPopupClick}
        rerenderNews={rerenderNews}
      />
      <About />
    </main>
  );
};

export default Main;
