import React from 'react';

const ThoughtsForm = ({ newThoughtMessage, handleNewThought, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h2>What&apos;s making you happy right now?</h2>
      <textarea value={newThoughtMessage} onChange={handleNewThought} maxLength="140" />
      <button className="submit-button" type="submit">❤️ Send happy thought ❤️</button>
    </form>
  )
}

export default ThoughtsForm;