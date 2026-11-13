
import { useState } from 'react';

function Comments() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !comment.trim()) {
      return;
    }

    setComments([
      ...comments,
      { id: Date.now(), name, comment }
    ]);

    setName('');
    setComment('');
  }

  return (
    <section className="comments-section">

<h2>Comments</h2>

<div className="comments-list">
  <div className="comment">
    <h3>soundseeker92</h3>
    <p>
      This article beautifully captures the essence of
      experimental sound. Erased Tapes is truly pushing
      boundaries. Makes me want to revisit Nils Frahm's
      early work. I wonder what you think about their
      older stuff?
    </p>
  </div>

  <div className="comment">
    <h3>Ted Baker</h3>
    <p>
      I've been following the label for years—so glad
      someone's finally writing about their impact.
    </p>
  </div>

  <div className="comment">
    <h3>Queen_of_noise</h3>
    <p>
      I discovered Erased Tapes through Ólafur Arnalds—
      this article brought back memories and be and my
      friends listening together. A bit too poetic for
      my taste, but still compelling.
    </p>
  </div>
</div>

      <h2>Leave a Comment</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-name">Name</label>
        <input
          id="comment-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="comment-message">Comment</label>
        <textarea
          id="comment-message"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />

        <button type="submit">Submit Comment</button>
      </form>

      <div className="comments-list">
        {comments.map((item) => (
          <div className="comment" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;
