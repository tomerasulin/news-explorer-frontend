import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './Main.css';

const Main = ({ isLoggedIn }) => {
  return (
    <main className='main'>
      <NewsCardList
        isSavedNews={false}
        isLoggedIn={isLoggedIn}
        text='Sign in to save articles'
      />
      {/* <Preloader /> */}
      {/* <NotFound /> */}
      <About />
    </main>
  );
};

export default Main;
