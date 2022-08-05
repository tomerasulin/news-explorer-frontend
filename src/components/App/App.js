import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PopupWithConfirmation from '../PopupWithConfirmation/PopupWithConfirmation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Register from '../Register/Register';
import { register, authorize, checkToken } from '../../utils/auth';
import Login from '../Login/Login';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupWithFailure from '../PopupWithFailure/PopupWithFailure';

function App() {
  const [isSigninPopupOpen, setisSigninPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isFailurePopupOpen, setIsFailurePopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isNewsNotFound, setIsNewsNotFound] = useState(false);
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState({
    title: 'Nothing found',
    content: 'Sorry, but nothing matched your search terms.',
  });
  const [savedArticles, setSavedArticles] = useState([]);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [serverError, setServerError] = useState('');
  const [sign, setSign] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    function handleWindowSize() {
      setIsMobile(window.innerWidth <= 680);
    }
    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, [isOpen, isMobile]);

  function handleNews(news, keyword) {
    if (news.length > 0) {
      setArticles(news);
      setKeyword(keyword);
      setIsNewsNotFound(false);
      localStorage.setItem('saved', savedArticles);
    } else {
      setIsNewsNotFound(true);
    }
    setIsSearching(false);
  }

  function handleError() {
    setError({
      title: 'Sorry, something went wrong during the request.',
      content:
        'There may be a connection issue or the server may be down. Please try again later.',
    });
    setIsSearching(false);
  }

  //creating new user
  function handleRegister({ password, email, username }) {
    register({ password, email, username })
      .then(() => {
        setIsConfirmationPopupOpen(true);
      })
      .catch((e) => {
        if (e === '409') {
          setServerError('User already exists');
          setSign('Sign in');
        } else if (e === '500') {
          setServerError('Internal server error! Try again later.');
          setSign('Sign in');
        }

        setIsFailurePopupOpen(true);
      })
      .finally(() => closeAllPopups());
  }

  function handleLogin({ password, email }) {
    authorize({ password, email })
      .then((user) => {
        localStorage.setItem('jwt', user.token);
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch(() => {
        setServerError('Incorrect email or password');
        setSign('Sign in');
        setIsFailurePopupOpen(true);
      })
      .finally(() => closeAllPopups());
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
  }

  function closeAllPopups() {
    setisSigninPopupOpen(false);
    setIsRegisterPopupOpen(false);
  }

  function handleChangeForm(e) {
    e.preventDefault();
    if (isSigninPopupOpen) {
      setisSigninPopupOpen(false);
      setIsRegisterPopupOpen(true);
    } else {
      setisSigninPopupOpen(true);
      setIsRegisterPopupOpen(false);
    }
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken(jwt)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch(console.log);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    isLoggedIn &&
      mainApi
        .getCurrentUser()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(console.log);
  }, [isLoggedIn]);

  useEffect(() => {
    isLoggedIn &&
      mainApi
        .getAllArticles()
        .then((articles) => {
          setSavedArticles(articles);
        })
        .catch(console.log);
  }, [isLoggedIn]);

  function handleRerenderNews() {
    mainApi
      .getAllArticles()
      .then((news) => {
        setSavedArticles(news);
      })
      .catch(console.log);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <div
                className={isOpen ? 'App__image App__image_open' : 'App__image'}
              >
                <Header
                  onPopupClick={() =>
                    setIsRegisterPopupOpen(!isRegisterPopupOpen)
                  }
                  isLoggedIn={isLoggedIn}
                  isOpen={isOpen}
                  isMobile={isMobile}
                  onHandleMenu={() => setIsOpen(!isOpen)}
                  onLogout={handleLogout}
                  rerenderNews={handleRerenderNews}
                />
                <SearchForm
                  onNews={handleNews}
                  onSearch={setIsSearching}
                  onError={handleError}
                />
                <Main
                  isLoggedIn={isLoggedIn}
                  isSearching={isSearching}
                  isNewsNotFound={isNewsNotFound}
                  articles={articles}
                  keyword={keyword}
                  error={error}
                  savedArticles={savedArticles}
                  onPopupClick={() => setisSigninPopupOpen(!isSigninPopupOpen)}
                  rerenderNews={handleRerenderNews}
                />
              </div>
            }
          />
          <Route
            path='saved-news'
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <SavedNewsHeader
                  isOpen={isOpen}
                  isMobile={isMobile}
                  onHandleMenu={() => setIsOpen(!isOpen)}
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogout}
                  rerenderNews={handleRerenderNews}
                />
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  rerenderNews={handleRerenderNews}
                />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Login
          isOpen={isSigninPopupOpen}
          onClose={closeAllPopups}
          onLogin={handleLogin}
          onChangeForm={handleChangeForm}
        />
        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegister}
          onChangeForm={handleChangeForm}
        />
        <PopupWithConfirmation
          isOpen={isConfirmationPopupOpen}
          onClose={() => setIsConfirmationPopupOpen(!isConfirmationPopupOpen)}
          onClick={(e) => {
            e.preventDefault();
            setIsConfirmationPopupOpen(!isConfirmationPopupOpen);
            setisSigninPopupOpen(true);
          }}
        />
        <PopupWithFailure
          isOpen={isFailurePopupOpen}
          onClose={() => setIsFailurePopupOpen(!isFailurePopupOpen)}
          onClick={(e) => {
            e.preventDefault();
            setIsFailurePopupOpen(!isFailurePopupOpen);
            if (sign === 'Sign in') {
              setisSigninPopupOpen(true);
            } else {
              setIsRegisterPopupOpen(true);
            }
          }}
          text={serverError}
          subtext={sign}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
