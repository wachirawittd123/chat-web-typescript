import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios'
import { useCallback } from 'react'
import ToastMessage from './toast'
import Router from 'next/router'

const Navbar = () => {
  const { currentUser }:any = useContext(AuthContext)

  const notify = useCallback((type, message) => {
    ToastMessage({ type, message })
  }, [])

  const signOut = async() => {
    try {
      const result = await axios({
        method: "post",
        url: `/api/auth/logout`,
      })
      if(result?.data?.result === "Logout success") {
        notify("success", "Signout success")
        Router.push("/signin")
      }
    } catch (err:any) {
      notify("error", err?.response?.data?.message.toString())
    }
  }

  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src={currentUser?.photoUrl} alt="" />
        <span>{currentUser?.displayName}</span>
        <button onClick={signOut}>logout</button>
      </div>
    </div>
  )
}

export default Navbar