import React, { useState } from 'react'

import withRoot from '../../withRoot'

//component imports 
import Login from './Login'
import Register from './Register'

export default withRoot(() => {
  const [newUser, setNewUser] = useState(true)
  return newUser ? (
    <Register setNewUser={setNewUser} />
  ) : (
      <Login />
    )
})
