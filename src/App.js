import React, { Component } from "react";
import NavBar from "./navbar";
import "./App.css";
import Table from './Table';
import Form from './Form';
//import Counters from "./components/counters";

class App extends Component {
  state = {
    name: "Products",
    products: []
  };

  // 'constructor' (1st) hook of the MOUNTing phase
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    // this.state = this.props.something.... // can be set state directly to the props here
  }

  // 'render' (2nd) hook of the MOUNTing phase
  render() {
    console.log("App - Rendered"); // along with all its children recursively
    return (
      <React.Fragment>
        
        <NavBar
          totalCounters = {this.state.products.filter(c => c.counter > 0).length}
          onReset = {this.deleteAllProducts}
        />
        
        <div className = "container">

          <Table
              productData = {this.state.products}
              incrementProduct = {this.incrementProduct}
              decrementProduct = {this.decrementProduct}
              removeProduct = {this.removeProduct}
          />
          
          <h3>Add New Product</h3>
          <Form handleSubmit={this.handleSubmit} />
          
        </div>
      </React.Fragment>
    );
  }

  handleSubmit = product => {
    this.setState({products: [...this.state.products, product]});
  }

  // 'componentDidMount' (3rd) hook of the MOUNTing phase
  componentDidMount() {
    // perfect place to make AJAX call to get data from the server
    console.log("App - Mounted");
    // this.setState(to the recieved data...)
  }

  /* Children's event handlers */
  decrementProduct = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].counter--;
    this.setState({ products });
  };

  incrementProduct = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].counter++;
    this.setState({ products });
  };

  removeProduct = productId => {
    console.log(productId);
    // return all the counter objects except the one with the given id (the del btn of which is clicked)
    const products = this.state.products.filter((c, id) => id !== productId);
    console.log(products);
    this.setState({ products }); // polluting the state of the counters
  };

  deleteAllProducts = () => {
    const products = [];
    
    this.setState({ products });
  };
}

export default App;