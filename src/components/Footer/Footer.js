import './Footer.css';
import githubLogo from '../../images/Github.svg';
import LinkedinLogo from '../../images/LinkedIn.svg';
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
            <Link className='footer__link' to={'/'} reloadDocument>
              Home
            </Link>
          </li>
          <li className='footer__link'>
            <a
              className='footer__link'
              href='https://tomerasulin.github.io/tomer-website'
              target='_blank'
              rel='noreferrer'
            >
              Tomer's Website
            </a>
          </li>
        </ul>
        <ul className='footer__logo-group'>
          <a
            href='https://github.com/tomerasulin'
            target='_blank'
            className='footer__logo'
            rel='noreferrer'
          >
            <img src={githubLogo} alt='GitHub Logo' />
          </a>
          <a
            href='https://www.linkedin.com/in/tomerasulin/'
            target='_blank'
            className='footer__logo'
            rel='noreferrer'
          >
            <img className='footer__logo_img' src={LinkedinLogo} alt='LinkedIn Logo' />
          </a>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
