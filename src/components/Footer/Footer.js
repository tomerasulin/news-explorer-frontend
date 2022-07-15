import './Footer.css';
import githubLogo from '../../images/Github.svg';
import facebookLogo from '../../images/Facebook.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        © {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className='footer__groups'>
        <div className='footer__link-group'>
          <p className='footer__link'>Home</p>
          <p className='footer__link'>Practicum by Yandex</p>
        </div>
        <div className='footer__logo-group'>
          <img className='footer__logo' src={githubLogo} alt='GitHub Logo' />
          <img
            className='footer__logo'
            src={facebookLogo}
            alt='Facebook Logo'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
