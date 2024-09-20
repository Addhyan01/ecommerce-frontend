import React, { useEffect, useState } from 'react'

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



    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <ul>
                <li>Serial No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>

            {
                products.map((item, index, arr)=>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₹ {item.price}</li>
                        <li>{item.category}</li>
                </ul>
                )
            }
                
                
            
        

                

           
        </div>
    )
}
