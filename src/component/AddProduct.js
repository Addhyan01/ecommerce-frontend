import React, { useState } from 'react'
import Swal from 'sweetalert2';


export default function AddProduct() {
   
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [category, setcatogery] = useState('');
        const [company, setCompany] = useState('');
        const [error, setError]= useState(false);

        const addProduct = async () =>{

            if(!name || !price || !category || !company){
                setError(true)
                return false
            }
            

            const userId = JSON.parse(localStorage.getItem("user"))._id;
            // console.log(userId);
            let result = await fetch('http://localhost:5000/add-product',{
                method:'post',
                body:JSON.stringify({name, price, category, company, userId:userId}),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            result = await result.json();
            // console.warn(result);
            if(result){
                Swal.fire({
                    title: "Add Product!",
                    text: "Successfully Added!",
                    icon: "success"
                  });
                setName('');
                setPrice('');
                setcatogery('');
                setCompany('');
            }




        }

  return (

        
    <div className='add'>
        <h2>Add Product</h2>
        <input type='text' className='inputBox' placeholder='Product Name'  value={name} onChange={(e)=>{setName(e.target.value)}}/> 
       
        { error && !name && <span className='invalid'>Enter valid name</span>}
        <input type='text'  className='inputBox' placeholder='Product Price' value={price}  onChange={(e)=>{setPrice(e.target.value)}}/> 
        { error && !price && <span className='invalid'>Enter valid name</span>}
        <input type='text'  className='inputBox' placeholder='Product Catogery' value={category}  onChange={(e)=>{setcatogery(e.target.value)}}/> 
        { error && !category && <span className='invalid'>Enter valid name</span>}
        <input type='text'  className='inputBox' placeholder='Product Company' value={company}  onChange={(e)=>{setCompany(e.target.value)}}/> 
        { error && !company && <span className='invalid'>Enter valid name</span>}
        <button className='appButton' onClick={addProduct} >Add Product</button>
       


    </div>
  )
}
