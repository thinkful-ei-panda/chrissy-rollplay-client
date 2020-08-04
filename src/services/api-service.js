// import TokenService from './token-service.js';
import config from '../config';

const ApiService = {
  getTopics() {
    return fetch(`${config.API_ENDPOINT}topics/topics`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getTopic(topicId) {
    return fetch(`${config.API_ENDPOINT}topics/${topicId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postTopic(topicId, userId, topicSystem, topicDesc) {
    return fetch(`${config.API_ENDPOINT}/topics`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        topic_id: topicId,
        topic_owner: userId,
        rpg_system: topicSystem,
        topic_desc: topicDesc
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getComments(topicId) {
    return fetch(`${config.API_ENDPOINT}/topics/${topicId}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(commentId, userId, topicId, commentDesc) {
    return fetch(`${config.API_ENDPOINT}/topics/${topicId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        comment_id: commentId,
        comment_owner: userId,
        comment_thread: topicId,
        comment_desc: commentDesc
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ApiService;