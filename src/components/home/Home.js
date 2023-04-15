import React from 'react'
import "./Home.css"

export default function Home({setLoginUser}) {
  return (
    <div className="home">
      <h1>Welcome to home page</h1>
      <div className="button" onClick={()=>setLoginUser({})}>Logout</div>
    </div>
  )
}
