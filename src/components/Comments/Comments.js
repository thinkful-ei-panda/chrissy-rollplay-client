import React from 'react';
import './Comments.css';

class Comments extends React.Component {
  render() {
    return (
      <ul className="comments">
        <div className="comment">
          <div className="comment-content">
            <h2 className="comment-user">
              Username says...
            </h2>
            <p>Lorem ipsum etc</p>
          </div>
          <div className="comment-buttons">
            <button type="button" className="comment-button">
              Edit
            </button>
            <button type="button" className="comment-button">
              Delete
            </button>
            <button type="button" className="comment-button hidden">
              Solution
            </button>
          </div>
        </div>
        <div className="comment">
          <div className="comment-content">
            <h2 className="comment-user">
              Username says...
            </h2>
            <p>Lorem ipsum etc</p>
          </div>
          <div className="comment-buttons">
            <button type="button" className="comment-button">
              Edit
            </button>
            <button type="button" className="comment-button">
              Delete
            </button>
            <button type="button" className="comment-button hidden">
              Solution
            </button>
          </div>
        </div>
        <div className="comment">
          <div className="comment-content">
            <h2 className="comment-user">
              Username says...
            </h2>
            <p>          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          </div>
          <div className="comment-buttons">
            <button type="button" className="comment-button">
              Edit
            </button>
            <button type="button" className="comment-button">
              Delete
            </button>
            <button type="button" className="comment-button hidden">
              Solution
            </button>
          </div>
        </div>
      </ul>
    )
  }
}

export default Comments;