import React, { useState } from 'react'
import Form from './components/Form'
import Details from './components/Details'

function App() {
  const [user, setUser] = useState(null)
  const [repositories, setRepositories] = useState([])

  const fetchUser = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData)

        return fetch(`https://api.github.com/users/${username}/repos`)
      })
      .then((response) => response.json())
      .then((reposData) => {
        setRepositories(reposData)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const handleReset = () => {
    setUser(null)
    setRepositories([])
  }

  return (
    <div>
      {user ? (
        <Details
          user={user}
          repositories={repositories}
          onReset={handleReset}
        />
      ) : (
        <Form onSubmit={fetchUser} />
      )}
    </div>
  )
}

export default App
