import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPasword ] = useState('');
    const navigate = useNavigate();



    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    })


    const collectionData =async () =>{
      // console.warn(name,email,password);
      let result = await fetch('http://localhost:5000/register',{
        method: 'post',
        body: JSON.stringify({name,email,password}),
        headers: {
          'Content-Type': 'application/json'
        },
        
      })
      result = await result.json();
      console.warn(result);
    
      localStorage.setItem("user",JSON.stringify(result));
      
        navigate("/")
      

      // console.warn(await result.json());
      // localStorage.setItem("user",JSON.stringify(result));
      // if(result){
      //   navigate("/")
      // }


    }

  return (
    <div className='register'>
        <h2>SignUp</h2>
        <input className='inputBox' type='text' placeholder='Enter Name' value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input className='inputBox' type='email' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className='inputBox' type='password' placeholder='Enter Password' value={password} onChange={(e)=>{setPasword(e.target.value)}}/>
        <button className='appButton' onClick={collectionData}>Sign Up</button>
        
    </div>
   
  )
}
 