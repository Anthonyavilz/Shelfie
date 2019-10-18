import React from 'react';
import Axios from 'axios';

class Form extends React.Component {
    constructor() {
      super();
        this.state = {
            imageURL: '',
            productName: '',
            price: 0
        }
    }

handleImgChange = e => {
    this.setState({imageURL: e.target.value})
}  

handleProNameChange = e => {
    this.setState({productName: e.target.value})
}

handlePriceChange = e => {
    this.setState({price: e.target.value})
}  

clearField() {
    this.setState({
        imageURL: '',
        productName: '',
        price: 0
    })
}

handleClick = e => {
    const {imageURL, productName, price} = this.state;
    // e.preventDefault();
    Axios.post('/api/product', {
        imageURL,
        productName,
        price
    }).then(Response => {
        console.log(Response);
    }).catch(err => {
        console.log(err);
    })
}

    render() {
      return(
        <div>
            <input type="text" placeholder="ImageURL" value={this.state.imageURL} onChange={this.handleImgChange}></input>
            <input type="text" placeholder="Product Name" value={this.state.productName} onChange={this.handleProNameChange}></input>
            <input type="text" placeholder="Price" pattern="[0-9]*" value={this.state.price} onChange={this.handlePriceChange}></input>
            <button onClick={() => this.clearField()}>Cancel</button>
            <button onClick={() => this.handleClick()}>Add to Inventory</button>
        </div>
      )
    }
  
  }
  
  export default Form;