// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(username)
  }
  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const isValid = value =>  value === value.toLowerCase()
  const updateUsername = (event) => {
    if (isValid(event.target.value)) {
      setUsername(event.target.value)
      setError('')
    }
    else {
      setError('Username must be lowercase')
    }
  }

  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor='username'>Username:</label>
        <input id='username' type="text" value={username} onChange={updateUsername}/>
        { error ? <p role='alert'>{error}</p> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
