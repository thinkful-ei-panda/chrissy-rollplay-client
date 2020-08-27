import config from '../config';

const ApiService = {
  getTopics() {
    return fetch(`${config.API_ENDPOINT}topics`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
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
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postTopic( title, topic_owner, rpg_system, topic_desc, topic_passphrase) {
    return fetch(`${config.API_ENDPOINT}topics`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        topic_owner: topic_owner,
        rpg_system: rpg_system,
        topic_desc: topic_desc,
        topic_passphrase: topic_passphrase
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  editTopic(topic_id, title, topic_desc, rpg_system ) {
    console.log(topic_id)
    return fetch(`${config.API_ENDPOINT}topics/${topic_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        topic_id: topic_id,
        title: title,
        topic_desc: topic_desc,
        rpg_system: rpg_system
      }),
    })
    .then(res => res.json
      )
  },
  deleteTopic(topic_id) {
    console.log(topic_id)
    return fetch(`${config.API_ENDPOINT}topics/${topic_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
  },
  getComments(topicId) {
    console.log(topicId);
    return fetch(`${config.API_ENDPOINT}comments/${topicId}`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getAllComments() {
    return fetch(`${config.API_ENDPOINT}comments/comments`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(commentOwner, commentPassphrase, commentDesc, commentThread) {
    console.log('postComment fired');
    return fetch(`${config.API_ENDPOINT}comments/${commentThread}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        comment_owner: commentOwner,
        comment_passphrase: commentPassphrase,
        comment_desc: commentDesc,
        comment_thread: commentThread
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  editComment(comment_id, comment_desc) {
    console.log(comment_id)
    return fetch(`${config.API_ENDPOINT}comments/${comment_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        comment_id: comment_id,
        comment_desc: comment_desc
      }),
    })
  },
  deleteComment(comment_id) {
    console.log(comment_id, 'delete comment fired')
    return fetch(`${config.API_ENDPOINT}comments/${comment_id}`, {
      method: 'DELETE',
    })
  },
}

export default ApiService;