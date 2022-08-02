import './SearchForm.css';
import { useState } from 'react';
import newsApi from '../../utils/NewsApi';

const SearchForm = ({ onNews, onSearch, onError }) => {
  const [placeholder, setPlaceholder] = useState('Enter topic');
  const [keyword, setKeyword] = useState('');

  function handleChange(e) {
    setKeyword(e.target.value);
    setPlaceholder('Enter topic');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword) setPlaceholder('Please enter a keyword');
    else {
      onSearch(true);
      newsApi
        .getNews(keyword)
        .then((news) => {
          onNews(news.articles, keyword);
        })
        .catch((e) => {
          onError();
          console.log(e);
        });
    }
  }

  return (
    <section className='search'>
      <h1 className='search__title'>What's going on in the world?</h1>
      <p className='search__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          name='keyword'
          className='search__input'
          placeholder={placeholder}
          type='search'
          value={keyword}
          onChange={handleChange}
        ></input>
        <button className='search__button' type='submit'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
