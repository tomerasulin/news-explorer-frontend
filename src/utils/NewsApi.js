class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  // GET https://newsapi.org/v2/top-headlines?country=us&apiKey=[your_key]
  getNews(query) {
    return fetch(
      `${
        this._baseUrl
      }/?q=${query}&from=${this._getCurrentDateOneWeekPrior()}&to=${this._getCurrentDate()}&pageSize=100&apiKey=${
        this._apiKey
      }`
    ).then((res) => this._getResponseData(res));
  }

  _getCurrentDate() {
    let today = new Date();
    return (
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    );
  }

  _getCurrentDateOneWeekPrior() {
    let today = new Date();
    return (
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getDate()
    );
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }
}

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://nomoreparties.co/news/v2/everything'
    : 'https://newsapi.org/v2/everything';

const newsApi = new NewsApi({
  baseUrl: BASE_URL,
  apiKey: '3554a25f7fed4111b9e3c55f0299e243',
});

export default newsApi;
