import React, { Component } from 'react';
import './App.css';

const URL = `https://api.cryptonator.com/api/ticker/${CURRENCIES}`;

const CURRENCIES = "btc-usd";

class AppGetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    let url = URL;
    console.log(url);
    fetch(url).then(
      response => response.json()
    ).then(
      json => {
        console.log(json);
        this.setState({data: json});
      }
    );
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

ReactDOM.render(<AppGetList />, document.getElementById('example'));