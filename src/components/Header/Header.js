import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = ({
  onPopupClick,
  username,
  isLoggedIn,
  isOpen,
  isMobile,
  onHandleMenu,
}) => {
  return (
    <header className={isOpen ? 'header header__mobile' : 'header'}>
      <Link className='header__logo' to={'/'}>
        NewsExplorer
      </Link>
      <Navigation
        isLoggedIn={isLoggedIn}
        onPopupClick={onPopupClick}
        username={username}
        isMobile={isMobile}
        isOpen={isOpen}
        onHandleMenu={onHandleMenu}
      />
    </header>
  );
};

export default Header;
