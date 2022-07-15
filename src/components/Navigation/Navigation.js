import '../Navigation/Navigation.css';
import { Link } from 'react-router-dom';
import hamburgerMenu from '../../images/HamburgerIcon.svg';
import closeButton from '../../images/CloseIcon.svg';
import hamburgerMenuBlack from '../../images/HamburgerIconBlack.svg';
import closeButtonBlack from '../../images/CloseIconBlack.svg';

const Navigation = ({
  isLoggedIn,
  isSavedNews,
  onPopupClick,
  username,
  isMobile,
  isOpen,
  onHandleMenu,
}) => {
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
            <Link
              className={
                isSavedNews
                  ? 'nav__header-saved-news__item'
                  : 'nav__header__item'
              }
              to={'/'}
            >
              Home
            </Link>
            <button
              className={
                isLoggedIn ? 'nav__footer__item_hide' : 'nav__header__item'
              }
              onClick={onPopupClick}
              type='button'
            >
              Sign in
            </button>
            <Link
              className={
                isLoggedIn && isSavedNews
                  ? 'nav__header-saved-news__item'
                  : isLoggedIn
                  ? 'nav__header__item'
                  : 'nav__header__item_hide'
              }
              to={'/saved-news'}
            >
              Saved articles
            </Link>
            <p
              className={
                isLoggedIn && isSavedNews
                  ? 'nav__header-saved-news__item'
                  : isLoggedIn
                  ? 'nav__header__item'
                  : 'nav__header__item_hide'
              }
            >
              {username}
            </p>
          </nav>
        </>
      )}
    </>
  ) : (
    <>
      <nav className={isLoggedIn ? 'nav__header-saved-news' : 'nav__header'}>
        <Link
          className={
            isSavedNews
              ? 'nav__header-saved-news__item'
              : 'nav__header__item nav__header__item_focus'
          }
          to={'/'}
        >
          Home
        </Link>
        <button
          className={
            isLoggedIn ? 'nav__footer__item_hide' : 'nav__header__item'
          }
          onClick={onPopupClick}
          type='button'
        >
          Sign in
        </button>
        <Link
          className={
            isLoggedIn && isSavedNews
              ? 'nav__header-saved-news__item nav__header-saved-news__item_focus'
              : isLoggedIn
              ? 'nav__header__item'
              : 'nav__header__item_hide'
          }
          to={'/saved-news'}
        >
          Saved articles
        </Link>
        <p
          className={
            isLoggedIn && isSavedNews
              ? 'nav__header-saved-news__item'
              : isLoggedIn
              ? 'nav__header__item'
              : 'nav__header__item_hide'
          }
        >
          {username}
        </p>
      </nav>
    </>
  );
};

export default Navigation;
