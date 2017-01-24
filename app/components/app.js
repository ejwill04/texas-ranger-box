import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles'
import Header from './Header/Header'
import { GenerateJokes } from './generateJokes/GenerateJokes';
import { RandomJokeDisplay } from './randomJokeDisplay/randomJokeDisplay';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: '',
    };
  }

  componentDidMount() {
    fetch('https://api.icndb.com/jokes/random')
      .then((response) => {
        return response.json()
      }).then((obj) => {
        this.setState({ randomJoke: obj.value.joke})
      });
  }

  render() {
    return (
      <div>
        <Header />
        <RandomJokeDisplay joke={this.state.randomJoke}/>
        <GenerateJokes />
      </div>
    )
  }
}
