import React, { Component } from 'react';
import './App.css';
import Burger from './components/Burger/Burger';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        hi
        <Layout/>
        <BurgerBuilder/>
        <Burger/>
      </div>
    );
  }
}

export default App;
