import config from '../config';

const AuthApiService = {
  postLogin(username, password) {
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(username, password)
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e=>Promise.reject(e))
        :res.json()
        )
  },
  registerUser(newUsername, newPassword) {
    return fetch(`${config.API_ENDPOINT}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: newUsername,
        password: newPassword
      }),
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  }
}

export default AuthApiService;