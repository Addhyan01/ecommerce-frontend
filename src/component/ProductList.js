import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import Swal from 'sweetalert2';

export default function ProductList() {
    const [products, setProducts] = useState([]);
   



    useEffect(() => {
        getProducts();
        
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);



    }
    // console.warn("Get Result ==> ", products)
   

    const deleteProduct = async (id) =>{
        // console.warn(id);

        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        });
        result = await result.json();
        if(result){
            Swal.fire({
                title: "Product Deleted!",
                text: "Sucessfully Product Deleted!",
                icon: "success"
              });
            getProducts();
            
        }

    }

    const searchHandle = async (e)  =>{
        console.warn(e.target.value);
        let key = e.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json();
        if(result){
            setProducts(result);
        }
        else{

        }
        }
        else{
            getProducts();
        }
        
    }



    return (
        <div className='product-list container ' >
            <h3>Product List</h3>
            <input type='text' className='search-product-box' placeholder='Search Product' onChange={searchHandle}/>
           
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Company</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
       
           
           
           
            {/* <ul>
                <li>Serial No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Action</li>
            </ul> */}

            {
               products.length > 0 ?  products.map((item, index, arr)=>
                    <tr key={item._id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>₹ {item.price}</td>
                        <td>{item.company}</td>
                        <td>{item.category}</td>
                        <td><Button className='btn btn-sm me-1 btn-danger' onClick={()=>deleteProduct(item._id)}>Delete</Button>
                            <Button className='btn btn-warning btn-sm btn-a'> <Link to={"/update/"+item._id}>Update</Link></Button>
                        </td>
                                       
                </tr>
                
                )
                :
                    <h1 className="">No Result Found</h1>
            }
                
                
            
        

                

                </tbody>
                </Table>
                <br/>
                <br/>
                <br/>
        </div>
    )
}
