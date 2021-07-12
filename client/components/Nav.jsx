import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Nav () {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  async function handleLogOut () {
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('failed to logout')
    }
  }

  return (
    <>
      <nav className="w-full h-12 flex items-center xl:px-6 lg:mb-2 xl:mb-1">
        <div className="w-full grid grid-cols-2">
          <div className='my-auto'>
            <Link to='/explore'>
              <h1 className="xl:text-xl lg:text-lg font-extrabold my-auto hover:text-blue-400">DevPortfolio</h1>
            </Link>
          </div>
          <div>
            {currentUser ? <span className="flex relative order-1"><div className="flex items-center ml-auto"><button onClick={handleLogOut} className="flex items-center xl:ml-2 hover:bg-blue-400 bg-blue-200 rounded-md lg:h-8 px-3 lg:font-medium xl:font-semibold focus:outline-none lg:text-base">Log Out</button></div></span>
              : <span className="flex relative order-1">
                <div className="flex items-center ml-auto">
                    <button className="lg:font-medium xl:font-semibold mx-6 inline hover:text-blue-400 lg:text-base">Log in</button>
                    <button className="flex items-center xl:ml-2 hover:bg-blue-400 bg-blue-200 rounded-md lg:h-8 px-3 lg:font-medium xl:font-semibold focus:outline-none lg:text-base">Sign Up</button>
                </div>
              </span>
            }
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav
