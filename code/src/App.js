import React, { useEffect, useState } from 'react';
import ThoughtsForm from 'components/ThoughtsForm';
import ThoughtsList from 'components/ThoughtsList';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThoughtMessage, setNewThoughtMessage] = useState('')

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    fetchThoughts()
  }, [])

  // handleNewTodoChange
  const handleNewThought = (event) => {
    setNewThoughtMessage(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message: newThoughtMessage })
    })
      .then((response) => response.json())
      .then((newThought) => {
        setThoughtsList((previousThoughts) => [newThought, ...previousThoughts])
      })
  }

  const handleNewHeart = (_id) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`)
      .then((response) => response.json())
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
      .finally(() => setNewThoughtMessage)
  }

  return (
    <div>
      <ThoughtsForm
        newThoughtMessage={newThoughtMessage}
        handleNewThought={handleNewThought}
        onFormSubmit={onFormSubmit} />
      <ThoughtsList
        loading={loading}
        thoughtsList={thoughtsList}
        handleNewHeart={handleNewHeart} />
    </div>
  );
}
