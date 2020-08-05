import React, { Component } from 'react';

const CommentsContext = React.createContext({
  commentsList: [],
  setCommentsList: () => {},
  clearCommentsList: () => {},
  setError: () => {},
  clearError: () => {}
});

export default CommentsContext;

export class CommentsContextProvider extends Component {
  state = {
    commentsList: []
  };

  setCommentsList = (commentsList) => {
    console.log('I fired');
    this.setState({ commentsList });
  };

  clearCommentsList = () => {
    this.setState({ commentsList: [] });
  };

  setError = (error) => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null })
  };

  render() {
    const value = {
      commentsList: this.state.commentsList,
      error: this.state.error,
      setCommentsList: this.setCommentsList,
      clearCommentsList: this.clearCommentsList,
      setError: this.setError,
      clearError: this.clearError
    };
    return (
      <CommentsContext.Provider value={value}>
        {this.props.children}
      </CommentsContext.Provider>
    );
  }
}