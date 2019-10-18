import React from "react";
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    Axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
  }

  render() {
    return(
      <div>
        <Header />
        <Form getInventory={this.getInventory}/>
        <Dashboard inventory={this.state.inventory}/>
      </div>
    )
  }

}

export default App;