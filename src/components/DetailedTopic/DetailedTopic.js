import React from 'react';
import CommentsList from '../CommentsList/CommentsList.js';
import './DetailedTopic.css';

class DetailedTopic extends React.Component {
  render() {
    return (
    <>
      <section class="detailed-topic">
        <div class="detailed-topic-info">
          <h2 class="detailed-topic-title">
            Username asks...
          </h2>
          <h3>
            RPG System
          </h3>
          <p class="detailed-topic-description">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p>
        </div>
        <div class="detailed-topic-buttons">
          <button class="detailed-edit detailed-button">Edit</button>
          <button class="detailed-delete detailed-button">Delete</button>
          <button class="detailed-add-comment detailed-button">Comment</button>
          <button class="detailed-back detailed-button">Back</button>
        </div>
      </section>
      <section class="detailed-topic-edit hidden">
        <form class="detailed-topic-edit-info">
          <input type="text" class="detailed-edit-header" placeholder="Old Title" />
          <input type="text" class="detailed-edit-system" placeholder="Old System" />
          <textarea class="detailed-edit-description" placeholder="OldContent" />
        </form>
        <div class="detailed-topic-edit-buttons">
          <button class="detailed-edit-submit detailed-button">Submit</button>
          <button class="detailed-edit-cancel detailed-button">Cancel</button>
        </div>
      </section>
      <section class="comments-container">
        <CommentsList />
      </section>
    </>
    )
  }
}

export default DetailedTopic;