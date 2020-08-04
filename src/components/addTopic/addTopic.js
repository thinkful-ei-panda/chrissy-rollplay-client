// import React from 'react';
// import ApiService from "../../services/api-service.js";
// import TopicsListContext from "../../contexts/TopicsContext.js";
// import "./addTopic.css";
// import TopicsListContext from '../../contexts/TopicsContext.js';

// class AddTopic extends React.Component {
//   static contextType = TopicsListContext;

//   state = {
//     title: "",
//     topicOwner: null,
//     rpg_system: "",
//     topic_desc: ""
//   };

//   handleTopicSubmit = (e) => {
//     e.preventDefault();
//     const { topicOwner, rpg_system, topic_desc } = this.state;
//     const topic = {
//       title: e.currentTarget.title.value,
//       topic_desc: topic_desc,
//     }
//   }
// }