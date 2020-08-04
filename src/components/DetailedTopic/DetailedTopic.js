import React from 'react';
import CommentsList from '../CommentsList/CommentsList.js';
import './DetailedTopic.css';

class DetailedTopic extends React.Component {
  render() {
    return (
    <>
      <section className="detailed-topic">
        <div className="detailed-topic-info">
          <h2 className="detailed-topic-title">
            Username asks...
          </h2>
          <h3>
            RPG System
          </h3>
          <p className="detailed-topic-description">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p>
        </div>
        <div className="detailed-topic-buttons">
          <button className="detailed-edit detailed-button">Edit</button>
          <button className="detailed-delete detailed-button">Delete</button>
          <button className="detailed-add-comment detailed-button">Comment</button>
          <button className="detailed-back detailed-button">Back</button>
        </div>
      </section>
      <section className="detailed-topic-edit hidden">
        <form className="detailed-topic-edit-info">
          <input type="text" className="detailed-edit-header" placeholder="Old Title" />
          <input type="text" className="detailed-edit-system" placeholder="Old System" />
          <textarea className="detailed-edit-description" placeholder="OldContent" />
        </form>
        <div className="detailed-topic-edit-buttons">
          <button className="detailed-edit-submit detailed-button">Submit</button>
          <button className="detailed-edit-cancel detailed-button">Cancel</button>
        </div>
      </section>
      <section className="comments-container">
        <CommentsList />
      </section>
    </>
    )
  }
}

export default DetailedTopic;