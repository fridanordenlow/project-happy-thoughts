/* eslint-disable no-underscore-dangle */
import React from 'react';
import './ThoughtsList.css';
import { formatDistance } from 'date-fns';

const ThoughtsList = ({ loading, thoughtsList, handleNewHeart }) => {
  if (loading) {
    return <h1 className="loading">Loading in progress...</h1>
  }

  return (
    <>
      {thoughtsList.map((thought) => (
        <section className="thought-message-container" key={thought._id}>

          <p className="thought-text">{thought.message}</p>

          <div className="heart-timestamp-container">
            <div className="heart-button-and-counter">
              <button className={thought.hearts === 0 ? 'not-liked-class' : 'liked-class'} type="button" aria-label="like thought button" onClick={() => { handleNewHeart(thought._id) }}>
                <span aria-label="heart emoji">❤️</span>
              </button>
              <div className="heart-counter" aria-label="amount of likes">x {thought.hearts}</div>
            </div>
            <div className="timestamp">
              {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
            </div>
          </div>

        </section>
      ))}
    </>
  )
}

export default ThoughtsList;