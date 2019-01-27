import React, { Component } from 'react';
import './App.css';
import List from './AppList';
import {currenciesList} from './bd/store.js';

const currencies = currenciesList;


class App extends Component {
  render() {
    return (
      <section className="App">
        <div className="container" >
          <List currencies={currencies} />
        </div>
      </section>
    );
  }
}

export default App;
