import './NotFound.css';
import notFoundImage from '../../images/not-found_v1.svg';

const NotFound = ({ errorTitle, errorContent }) => {
  return (
    <section className='page-not-found'>
      <img
        className='page-not-found__image'
        src={notFoundImage}
        alt='Not Found'
      />
      <h3 className='page-not-found__title'>{errorTitle}</h3>
      <p className='page-not-found__text'>{errorContent}</p>
    </section>
  );
};

export default NotFound;
