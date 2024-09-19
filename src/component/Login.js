import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.name){
            alert("Login Sucessful");
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");

        }
        else{
            alert("Check User & pass")
        }
        
    }


    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate("/")
        }
    })


  return (
    <div className='login'>
        <h1>Login Page</h1>
        <input className='inputBox' type='email' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
        <input className='inputBox' type='password' placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 
        <button className='appButton' type='button' onClick={handleLogin}>Login</button>
        
    </div>
  )
}
