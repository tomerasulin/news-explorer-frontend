import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const SavedNewsHeader = ({
  isOpen,
  isMobile,
  onHandleMenu,
  username,
  isLoggedIn,
}) => {
  return (
    <>
      <header className='header-saved-news'>
        <Link className='header-saved-news__logo' to={'/'}>
          NewsExplorer
        </Link>
        <Navigation
          isLoggedIn={isLoggedIn}
          isSavedNews={true}
          username={username}
          isMobile={isMobile}
          isOpen={isOpen}
          onHandleMenu={onHandleMenu}
        />
      </header>
      <div className='header-saved-news__summary'>
        <p className='header-saved-news__subtitle'>Saved articles</p>
        <h2 className='header-saved-news__title'>
          Elise, you have 5 saved articles
        </h2>
        <p className='header-saved-news__keyword'>
          By keywords:<b> Nature, Yellowstone, and 2 other</b>
        </p>
      </div>
    </>
  );
};

export default SavedNewsHeader;
