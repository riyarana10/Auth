import React, {useState} from 'react'
import "./Register.css"

export default function Register() {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterpassword:""
    })
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }
  return (
    <div className='register'>
      <h1>Register</h1>
      <input type='text' name='name' value={user.name} onChange={handleChange} placeholder='enter your name'></input>
      <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='enter your email'></input>
      <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='enter password'></input>
      <input type='password' name='reEnterpassword' value={user.reEnterpassword} onChange={handleChange} placeholder='re-enter password'></input>
      <div className='button'>Register</div>
      <div>or</div>
      <div className='button'>Login</div>
      <div className='button'>Sign Up with google</div>
    </div>
  )
}
