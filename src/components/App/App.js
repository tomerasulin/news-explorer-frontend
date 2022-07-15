import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import { Route, Routes } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PopupWithConfirmation from '../PopupWithConfirmation/PopupWithConfirmation';

function App() {
  const [isSigninPopupOpen, setisSigninPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleWindowSize() {
      setIsMobile(window.innerWidth <= 425);
    }
    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, [isOpen, isMobile]);

  function handlePopupClick() {
    setisSigninPopupOpen(true);
  }

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <div
              className={isOpen ? 'App__image App__image_open' : 'App__image'}
            >
              <Header
                onPopupClick={handlePopupClick}
                username='Tomer'
                isLoggedIn={isLoggedIn}
                isOpen={isOpen}
                isMobile={isMobile}
                onHandleMenu={() => setIsOpen(!isOpen)}
              />
              <SearchForm />
              <Main />
            </div>
          }
        />
        <Route
          path='/saved-news'
          element={
            <>
              <SavedNewsHeader
                isOpen={isOpen}
                isMobile={isMobile}
                onHandleMenu={() => setIsOpen(!isOpen)}
                username='Tomer'
                isLoggedIn={isLoggedIn}
              />
              <SavedNews />
            </>
          }
        />
      </Routes>
      <PopupWithForm
        isOpen={isSigninPopupOpen}
        onClose={() => setisSigninPopupOpen(!isSigninPopupOpen)}
      />
      <PopupWithConfirmation
        isOpen={isConfirmationPopupOpen}
        onClose={() => setIsConfirmationPopupOpen(!isConfirmationPopupOpen)}
      />
      <Footer />
    </div>
  );
}

export default App;
