import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './Main.css';

const Main = () => {
  return (
    <main className='main'>
      <NewsCardList isSavedNews={true} isLoggedIn={true} />
      {/* <Preloader /> */}
      {/* <NotFound /> */}
      <About />
    </main>
  );
};

export default Main;
