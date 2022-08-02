import './Footer.css';
import githubLogo from '../../images/Github.svg';
import facebookLogo from '../../images/Facebook.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        © {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <nav className='footer__groups'>
        <ul className='footer__link-group'>
          <li className='footer__link'>
            <Link className='footer__link' to={'/'}>
              Home
            </Link>
          </li>
          <li className='footer__link'>
            <a
              className='footer__link'
              href='https://practicum.com'
              target='_blank'
              rel='noreferrer'
            >
              Practicum by Yandex
            </a>
          </li>
        </ul>
        <ul className='footer__logo-group'>
          <a
            href='https://github.com'
            target='_blank'
            className='footer__logo'
            rel='noreferrer'
          >
            <img src={githubLogo} alt='GitHub Logo' />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            className='footer__logo'
            rel='noreferrer'
          >
            <img src={facebookLogo} alt='Facebook Logo' />
          </a>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
