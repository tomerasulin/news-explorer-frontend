export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api'
    : 'http://localhost:3001';

const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`${res.status}`);
  }
  return res.json();
};

// /signup for user registration
export const register = (user) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: user.password,
      email: user.email,
      username: user.username,
    }),
  }).then(checkResponse);
};

// /signin for user authorization
export const authorize = (user) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: user.password, email: user.email }),
  }).then(checkResponse);
};

// checking token validity

export const checkToken = (jwt) => {
  if (jwt) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(checkResponse);
  }
};
