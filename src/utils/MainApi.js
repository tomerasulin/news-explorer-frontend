class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  saveArticle(article) {
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(article),
    }).then((res) => this._getResponseData(res));
  }

  deleteArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    }).then((res) => this._getResponseData(res));
  }

  getAllArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  }
}

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://news-explorer.students.nomoredomainssbs.ru'
    : 'http://localhost:3001';

const mainApi = new MainApi({
  baseUrl: BASE_URL,
});

export default mainApi;
