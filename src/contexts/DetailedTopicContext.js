// import React, { Component } from 'react';

// const DetailedTopicContext = React.createContext({
//   DetailedTopic: [],
//   newTopic: false,
//   topicDetail: false,
//   currentTopic: 0,
//   error: null,
//   setError: () => {},
//   clearError: () => {},
//   setDetailedTopic: () => {},
//   clearDetailedTopic: () => {},
//   setTopicDetail: () => {},
//   clearTopicDetail: () => {},
//   setCurrentTopic: () => {},
//   clearCurrentTopic: () => {}
// });

// export default DetailedTopicContext;

// export class DetailedTopicProvider extends Component {
//   state = {
//     DetailedTopic: [],
//     topicDetail: false,
//     currentTopic: 0,
//     error: null
//   };

//   setError = (error) => {
//     console.error(error);
//     this.setState({ error });
//   };

//   clearError = () => {
//     this.setState({ error: null });
//   };

//   setDetailedTopic = (DetailedTopic) => {
//     this.setState({ DetailedTopic });
//   };

//   clearDetailedTopic = () => {
//     this.setState({ DetailedTopic: [] });
//   };

//   setTopicDetail = () => {
//     this.setState({ topicDetail: true });
//   };

//   clearTopicDetail = () => {
//     this.setState({ topicDetail: false });
//   };

//   setCurrentTopic = (currentTopic) => {
//     this.setState({ currentTopic });
//   };

//   clearCurrentTopic = () => {
//     this.setState({ currentTopic: null });
//   };

//   render() {
//     const value = {
//       DetailedTopic: this.state.DetailedTopic,
//       newTopic: this.state.newTopic,
//       error: this.state.error,
//       topicDetail: this.state.topicDetail,
//       currentTopic: this.state.currentTopic,
//       setDetailedTopic: this.setDetailedTopic,
//       clearDetailedTopic: this.clearDetailedTopic,
//       setError: this.setError,
//       clearError: this.clearError,
//       setTopicDetail: this.setTopicDetail,
//       clearTopicDetail: this.clearTopicDetail,
//       setCurrentTopic: this.setCurrentTopic,
//       clearCurrentTopic: this.clearCurrentTopic
//     };
//     return (
//       <DetailedTopicContext.Provider value={value}>
//         {this.props.children}
//       </DetailedTopicContext.Provider>
//     );
//   }
// }