import React from 'react';
import './ThoughtsForm.css';

const ThoughtsForm = ({ newThoughtMessage, handleNewThought, onFormSubmit }) => {
  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <h2 className="question">What&apos;s making you happy right now?</h2>
      <textarea className="thought-input" value={newThoughtMessage} onChange={handleNewThought} minLength="4" maxLength="140" />
      <button className="submit-button" type="submit" aria-label="send happy thought" disabled={newThoughtMessage.length < 5 || newThoughtMessage.length > 140}>❤️ Send happy thought ❤️</button>
    </form>
  )
}

export default ThoughtsForm;