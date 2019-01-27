import React, { Component } from 'react';
import './App.css';

function ListItem(props) {
  return <li>{props.value.value} <span>{props.value.iso}</span></li>;
}

function List(props) {
  const currencies = props.currencies;
  return (
    <ul>
      {currencies.map((item) =>
        <ListItem key={item.toString()}
                  value={item} />
      )}
    </ul>
  );
}

export default List;
