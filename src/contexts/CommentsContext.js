import React, { Component } from 'react';

const CommentsContext = React.createContext({
  commentsList: [],
  setCommentsList: () => {},
  clearCommentsList: () => {},
  setEditComment: () => {},
  clearEditComment: () => {},
  setEditCommentId: () => {},
  clearEditCommentId: () => {},
  setError: () => {},
  clearError: () => {}
});

export default CommentsContext;

export class CommentsContextProvider extends Component {
  state = {
    commentsList: [],
    editComment: false,
    editCommentId: ''
  };

  setCommentsList = (commentsList) => {
    this.setState({ commentsList });
  };

  clearCommentsList = () => {
    this.setState({ commentsList: [] });
  };

  setEditCommentId = (comment_id) => {
    this.setState({ editCommentId: comment_id })
  };

  clearEditCommentId = () => {
    this.setState({ editCommentId: '' })
  };

  setEditComment = () => {
    this.setState({editComment: true})
  };

  clearEditComment = () => {
    this.setState({editComment: false})
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null })
  };

  render() {
    const value = {
      commentsList: this.state.commentsList,
      editComment: this.state.editComment,
      editCommentId: this.state.editCommentId,
      error: this.state.error,
      setCommentsList: this.setCommentsList,
      clearCommentsList: this.clearCommentsList,
      setEditComment: this.setEditComment,
      clearEditComment: this.clearEditComment,
      setEditCommentId: this.setEditCommentId,
      clearEditCommentId: this.clearEditCommentId,
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