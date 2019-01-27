import React, { Component } from 'react';
import './App.css';
import List from './AppList';
import {currenciesList} from './data';

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

fetch('https://api.cryptonator.com/api/ticker/eth-usd')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log('-------------- data', data)
    })

export default App;
