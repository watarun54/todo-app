import React, { Component } from 'react';
import logo from './logo.svg';
import fetchJsonp from 'fetch-jsonp';
import './App.css';
import axios from "axios";


class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    const request = axios.create({
      baseURL: 'http://localhost:3000/'
    })
    request.get('/')
      .then(res => {
        console.log(res.data);
        this.setState({
          todos: res.data.todos
        });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <ul>
        {this.state.todos.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default App;