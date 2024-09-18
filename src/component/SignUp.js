import React, { useState } from 'react'

export default function SignUp() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPasword ] = useState('');


    const collectionData =async () =>{
      // console.warn(name,email,password);
      const result = await fetch('http://localhost:5000/register',{
        method: 'post',
        body: JSON.stringify({name,email,password}),
        headers: {
          'Content-Type': 'application/json'
        },
        
      })
      console.warn(await result.json());
    }

  return (
    <div className='register'>
        <h1>Register</h1>
        <input className='inputBox' type='text' placeholder='Enter Name' value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input className='inputBox' type='email' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className='inputBox' type='password' placeholder='Enter Password' value={password} onChange={(e)=>{setPasword(e.target.value)}}/>
        <button className='appButton' onClick={collectionData}>Sign Up</button>
        
    </div>
   
  )
}
 