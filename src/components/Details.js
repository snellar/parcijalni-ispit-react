import React from 'react'
import PropTypes from 'prop-types'

function Details({ user, repositories, onReset }) {
  if (!user) {
    return null
  }

  return (
    <div>
      <img src={user.avatar_url} alt="Profile picture" />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Details: {user.bio}</p>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

Details.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }),
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onReset: PropTypes.func.isRequired,
}

export default Details
