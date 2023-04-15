import React, {useState} from 'react'
import "./Register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate();
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

    const register = ()=>{
      const {name,email,password,reEnterpassword} = user
      //check for fields
      if(name && email && password && (password === reEnterpassword)){
        axios.post('http://localhost:9002/register', user)
        .then(res => {
          alert(res.data.message)
          navigate("/login")
        })
      }
      else{
        alert("invalid input")
      }
      
    }
  return (
    <div className='register'>
      <h1>Register</h1>
      <input type='text' name='name' value={user.name} onChange={handleChange} placeholder='enter your name'></input>
      <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='enter your email'></input>
      <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='enter password'></input>
      <input type='password' name='reEnterpassword' value={user.reEnterpassword} onChange={handleChange} placeholder='re-enter password'></input>
      <div className='button' onClick={register}>Register</div>
      <div>or</div>
      <div className='button' onClick={()=>navigate("/login")}>Login</div>
      <div className='button'>Sign Up with google</div>
    </div>
  )
}
