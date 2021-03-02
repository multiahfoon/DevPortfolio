import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function AuthSignup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
        .then(result => history.push(`/get-started/${result}`))
    } catch {
      setError('Failed to sign up')
    }

    setLoading(false)
  }

  return (
    <>
      <h1><strong>Sign Up</strong></h1>
      <div className="w-full p-6 flex ">
        <div className=" flex-col mx-auto bg-gray-200 rounded-md p-6 m-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input ref={emailRef} className="inputBox placeHolderText" placeholder="Email" id='email' type='email' name='email' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>

            <div className="mb-3">
              <input ref={passwordRef} className="inputBox placeHolderText" placeholder="Password" id='password' type='password' name='password' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>

            <div className="mb-3">
              <input ref={passwordConfirmRef} className="inputBox placeHolderText" placeholder="Confirm Password" id='confirmPassword' type='password' name='confirmPassword' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>
            <button disabled={loading} className="flex items-center hover:bg-blue-400 bg-blue-200 rounded-md h-10 mb-3 px-3 font-semibold tracking-wide">Sign Up</button>
          </form>
          <p>Already have an account? <Link to='/login'><span className="hover:text-blue-400">Log In</span></Link></p>
        </div>
      </div>
    </>
  )
}

export default AuthSignup
