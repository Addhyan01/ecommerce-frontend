

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function UpdateProduct() {
   
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [category, setcatogery] = useState('');
        const [company, setCompany] = useState('');
      
        const params = useParams();
        const navigate = useNavigate();


        useEffect(()=>{
                
            getProductDetails();
        },[])


        const getProductDetails = async () => {
           
            let result = await fetch(`http://localhost:5000/product/${params.id}`);
            result = await result.json();
            console.warn(result);

            setName(result.name);
            setPrice(result.price);
            setcatogery(result.category);
            setCompany(result.company);
        

        }

        const updateProduct = async () =>{

            let result = await fetch(`http://localhost:5000/product/${params.id}`,{
                method:"put",
                body:JSON.stringify({name,price,category,company}),
                headers:{
                    "Content-Type" : "application/json"
                }
            });
            result = await result.json();
            Swal.fire({
                title: "Product Updated!",
                text: "Sucessfully Product Updated!",
                icon: "success"
                
              });
            navigate("/");
            // console.warn(result);
            

            // console.warn(name,category,company,price)
            
        }




  return (

        
    <div className='add'>
        <h2>Update Product</h2>
        <input type='text' className='inputBox' placeholder='Product Name'  value={name} onChange={(e)=>{setName(e.target.value)}}/> 
       
        
        <input type='text'  className='inputBox' placeholder='Product Price' value={price}  onChange={(e)=>{setPrice(e.target.value)}}/> 
       
        <input type='text'  className='inputBox' placeholder='Product Catogery' value={category}  onChange={(e)=>{setcatogery(e.target.value)}}/> 
        
        <input type='text'  className='inputBox' placeholder='Product Company' value={company}  onChange={(e)=>{setCompany(e.target.value)}}/> 
       
        <button className='appButton' onClick={updateProduct} >Update Product</button>
       


    </div>
  )
}
