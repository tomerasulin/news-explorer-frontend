import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = ({
  onPopupClick,
  isLoggedIn,
  isOpen,
  isMobile,
  onHandleMenu,
  onLogout,
  rerenderNews,
}) => {
  return (
    <header className={isOpen ? 'header header__mobile' : 'header'}>
      <Link className='header__logo' to='/'>
        NewsExplorer
      </Link>
      <Navigation
        isLoggedIn={isLoggedIn}
        onPopupClick={onPopupClick}
        isMobile={isMobile}
        isOpen={isOpen}
        onHandleMenu={onHandleMenu}
        onLogout={onLogout}
        rerenderNews={rerenderNews}
      />
    </header>
  );
};

export default Header;
