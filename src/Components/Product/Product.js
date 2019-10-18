import React from 'react';
  
export default function Product(props) {
    const {imageURL, productName, price} = props.item;
    return(
        <div>
            <div style={{backgroundImage: `url(${imageURL})`}} ></div>
            <p>{productName}</p>
            <p>{price}</p>
        </div>
    )
};