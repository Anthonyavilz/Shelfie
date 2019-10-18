import React from "react";
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return(
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    )
  }

}

export default App;