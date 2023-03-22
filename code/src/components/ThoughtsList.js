/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const ThoughtsList = ({ loading, thoughtsList, handleNewHeart }) => {
  if (loading) {
    return <h1 className="loading">Loading in progress...</h1>
  }

  return (
      {thoughtsList.reverse().map((thought) => (
        <section className="thought-message-container" key={thought._id}>

          <div className="thought-container">
            <textarea className="thought-text">{thought.message}</textarea>
          </div>

          <div className="heart-timestamp-container">
            <button type="button" className="heart-button" onClick={() => { handleNewHeart(thought._id) }}>❤️</button>
            <div className="heart-counter">x {thought.hearts}</div>
            <div className="timestamp">
              {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
            </div>
          </div>
          
        </section>
      ))}
  )
}

export default ThoughtsList;