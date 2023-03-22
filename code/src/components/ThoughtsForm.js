import React from 'react';

const ThoughtsForm = ({ newThoughtMessage, handleNewThought, onFormSubmit }) => {
  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <h2 className="question">What&apos;s making you happy right now?</h2>
      <p className="thought-input" value={newThoughtMessage} onChange={handleNewThought} maxLength="140" />
      <button className="submit-button" type="submit">❤️ Send happy thought ❤️</button>
    </form>
  )
}

export default ThoughtsForm;