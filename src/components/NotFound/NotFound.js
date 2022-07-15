import './NotFound.css';
import notFoundImage from '../../images/not-found_v1.svg';

const NotFound = () => {
  return (
    <section className='page-not-found'>
      <img
        className='page-not-found__image'
        src={notFoundImage}
        alt='Not Found Image'
      />
      <h3 className='page-not-found__title'>Nothing found</h3>
      <p className='page-not-found__text'>
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
};

export default NotFound;
