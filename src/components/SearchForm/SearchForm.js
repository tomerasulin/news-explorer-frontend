import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search'>
      <h1 className='search__title'>
        What's going on in the world?
      </h1>
      <p className='search__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className='search__form'>
        <input className='search__input' placeholder='Enter topic'></input>
        <button className='search__button'>Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
