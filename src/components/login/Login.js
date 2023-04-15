import React, {useState} from 'react'
import "./Login.css"

export default function Login() {
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='enter your email'></input>
      <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='enter password'></input>
      <div className='button'>Login</div>
      <div>or</div>
      <div className='button'>Register</div>
      <div className='button'>Login with google</div>
    </div>
  )
}
