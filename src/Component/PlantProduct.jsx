import React, { useEffect, useState } from 'react'

const PlantProduct = () => {

    const [data,setdata]=useState([]);

    useEffect(()=>{
        fetch('/db.json')
        .then(res=>res.json())
        .then(json=>setdata(json.plant))
        .catch(err=>console.log("Error fetching products:", err));

    },[]);

  return (
    <div className="cards-container">
            {data.map((product, index) => (
                <div className="product-card" key={index}>
                    <div className="img">
                        <img src={product.image} alt={product.name} style={{ height: 200, width: 350 }} />
                    </div>
                    <h2 className='title'>{product.name}</h2>
                    <p className='desc'>{product.description}</p>
                    <h3 className='price'>₹{product.price}</h3>
                    <button className='cart-btn'>add to cart</button>
                </div>
            ))}
        </div>
  )
}

export default PlantProduct
