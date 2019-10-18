import React from 'react';
import Product from '../Product/Product';

class Dashboard extends React.Component {  
    render() {
      return(
        <div>
            {this.props.inventory.map((element) => {
                return <Product key={element.id} item={element}/> 
            })}
        </div>
      );
    }
  
  }
  
  export default Dashboard;