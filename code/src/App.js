/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import ThoughtsForm from 'components/ThoughtsForm';
import ThoughtsList from 'components/ThoughtsList';
import Footer from 'components/Footer';
import './App.css'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThoughtMessage, setNewThoughtMessage] = useState('')

  // Fetch thoughts
  const fetchThoughts = () => {
    setLoading(true)
    // fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts') Technigo's API
    fetch('https://project-happy-thoughts-api-i35fofwaaq-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data.response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    fetchThoughts()
  }, [])

  const handleNewThought = (event) => {
    setNewThoughtMessage(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `${newThoughtMessage}`
      }),
      headers: { 'Content-Type': 'application/json' }
    }

    // fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options) Technigo's API
    fetch('https://project-happy-thoughts-api-i35fofwaaq-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((data) => { setThoughtsList([data.response, ...thoughtsList]) })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false); setNewThoughtMessage('') })
  }

  // Fetch likes
  const handleNewHeart = (thoughtId) => {
    fetch(`https://project-happy-thoughts-api-i35fofwaaq-lz.a.run.app/thoughts/${thoughtId}/like`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    })
    // fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' }
    // }) Technigo's API
      .then((response) => response.json())
      .then((data) => {
        const updateHearts = thoughtsList.map((like) => {
          if (like._id === data.response._id) {
            like.hearts += 1
            return like
          } else {
            return like
          }
        })
        setThoughtsList(updateHearts)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="app-body">
      <ThoughtsForm
        newThoughtMessage={newThoughtMessage}
        handleNewThought={handleNewThought}
        onFormSubmit={onFormSubmit} />
      <ThoughtsList
        loading={loading}
        thoughtsList={thoughtsList}
        handleNewHeart={handleNewHeart} />
      <Footer />
    </div>
  );
}
