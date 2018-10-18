import React, { Component } from 'react'
import Form from './components/Form/Form';
import ListCountainer from './components/ListContainer/ListContainer'
import './App.css'

class App extends Component {

  state = {
    item: "",
    items: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { items, item } = this.state;
    this.setState({ items: [...items, item ], item: "" })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(e);
    this.setState({ [name]: value })
  }

  render() {
    let { handleSubmit, handleChange } = this;
    let { items, item } = this.state;
    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="column" style={{ textAlign: "center" }}>
            <h1>Hello WishList!</h1>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange} 
              item={item}/>
          </div>
          <div className="column">
            {items.length > 0
            ? <ListCountainer items={items}/>
            : <p>Awaiting Wishlist!</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;