import '../Navigation/Navigation.css';
import { NavLink } from 'react-router-dom';
import hamburgerMenu from '../../images/HamburgerIcon.svg';
import closeButton from '../../images/CloseIcon.svg';
import hamburgerMenuBlack from '../../images/HamburgerIconBlack.svg';
import closeButtonBlack from '../../images/CloseIconBlack.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

const Navigation = ({
  isLoggedIn,
  isSavedNews,
  onPopupClick,
  isMobile,
  isOpen,
  onHandleMenu,
  onLogout,
  rerenderNews,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return isMobile ? (
    <>
      <img
        onClick={onHandleMenu}
        src={!isOpen ? hamburgerMenu : closeButton}
        alt={!isOpen ? 'Hamburger Menu' : 'Close Icon'}
        className={
          isSavedNews ? ' menu__mobile__saved-news_hide' : 'menu__mobile'
        }
      />
      <img
        onClick={onHandleMenu}
        src={!isOpen ? hamburgerMenuBlack : closeButtonBlack}
        alt={!isOpen ? 'Hamburger Menu' : 'Close Icon'}
        className={
          isSavedNews ? 'menu__mobile__saved-news ' : 'menu__mobile_hide'
        }
      />
      {isOpen && (
        <>
          <nav
            className={isLoggedIn ? 'nav__header-saved-news' : 'nav__header'}
          >
            <NavLink
              className={
                isSavedNews
                  ? 'nav__header-saved-news__item'
                  : 'nav__header__item'
              }
              to={'/'}
            >
              Home
            </NavLink>
            <button
              className={
                isLoggedIn ? 'nav__footer__item_hide' : 'nav__header__item'
              }
              onClick={onPopupClick}
              type='button'
            >
              Sign in
            </button>
            <NavLink
              className={
                isLoggedIn && isSavedNews
                  ? 'nav__header-saved-news__item'
                  : isLoggedIn
                  ? 'nav__header__item'
                  : 'nav__header__item_hide'
              }
              to='/saved-news'
              onClick={rerenderNews}
            >
              Saved articles
            </NavLink>
            <NavLink
              className={
                isLoggedIn && isSavedNews
                  ? 'nav__header-saved-news__item'
                  : isLoggedIn
                  ? 'nav__header__item'
                  : 'nav__header__item_hide'
              }
              to={'/'}
              onClick={onLogout}
            >
              {currentUser.username}
            </NavLink>
          </nav>
        </>
      )}
    </>
  ) : (
    <>
      <nav className={isLoggedIn ? 'nav__header-saved-news' : 'nav__header'}>
        <NavLink
          className={
            isSavedNews
              ? 'nav__header-saved-news__item'
              : 'nav__header__item nav__header__item_focus'
          }
          to={'/'}
        >
          Home
        </NavLink>
        <button
          className={
            isLoggedIn ? 'nav__header__item_hide' : 'nav__header__item'
          }
          onClick={onPopupClick}
          type='button'
        >
          Sign in
        </button>
        <NavLink
          className={
            isLoggedIn && isSavedNews
              ? 'nav__header-saved-news__item nav__header-saved-news__item_focus'
              : isLoggedIn
              ? 'nav__header__item'
              : 'nav__header__item_hide'
          }
          to='/saved-news'
          onClick={rerenderNews}
        >
          Saved articles
        </NavLink>
        <NavLink
          className={
            isLoggedIn && isSavedNews
              ? 'nav__header-saved-news__item'
              : isLoggedIn
              ? 'nav__header__item'
              : 'nav__header__item_hide'
          }
          to={'/'}
          onClick={onLogout}
        >
          {currentUser.username}
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
