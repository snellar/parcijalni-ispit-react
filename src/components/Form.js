// Form.js
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Form({ onSubmit }) {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(username)
  }

  return (
    <div>
      <h1>GitHub username:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <button type="submit">GO!</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form
