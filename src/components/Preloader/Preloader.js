import './Preloader.css';

const Preloader = () => {
  return (
    <section className='preloader'>
      <div className='preloader__circle-preloader'></div>
      <p className='preloader__text'>Searching for news...</p>
    </section>
  );
};

export default Preloader;
