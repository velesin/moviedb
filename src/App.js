import React, { Component } from 'react';
import { search } from './services/movies.service';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const movies = await search('termi');

    this.setState({ movies });
  }

  render() {
    return (
      <div className="App">
        <pre>{JSON.stringify(this.state.movies, null, 2) }</pre>
      </div>
    );
  }
}

export default App;
