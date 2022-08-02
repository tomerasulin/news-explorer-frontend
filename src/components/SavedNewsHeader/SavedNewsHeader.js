import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const SavedNewsHeader = ({
  isOpen,
  isMobile,
  onHandleMenu,
  isLoggedIn,
  onLogout,
  rerenderNews,
}) => {
  return (
    <header className='header-saved-news'>
      <Link className='header-saved-news__logo' to={'/'}>
        NewsExplorer
      </Link>
      <Navigation
        isLoggedIn={isLoggedIn}
        isSavedNews={true}
        isMobile={isMobile}
        isOpen={isOpen}
        onHandleMenu={onHandleMenu}
        onLogout={onLogout}
        rerenderNews={rerenderNews}
      />
    </header>
  );
};

export default SavedNewsHeader;
