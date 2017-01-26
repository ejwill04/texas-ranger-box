import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles'
import Header from './Header/Header'
import { Link } from 'react-router';
import { GenerateJokes } from './generateJokes/GenerateJokes';
import { RandomJokeDisplay } from './randomJokeDisplay/randomJokeDisplay';
import { DisplayJokes } from './displayJokes/DisplayJokes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: '',
      jokes: '',
      numOfJokes: '',
    };
  }

  componentDidMount() {
    fetch('https://api.icndb.com/jokes/random?escape=javascript')
      .then((response) => {
        return response.json()
      }).then((obj) => {
        this.setState({ randomJoke: obj.value.joke});
      });
  }

  acceptInput(e) {
    this.setState({ numOfJokes: +e.target.value });
  }

  getJokes(num) {
    fetch(`https://api.icndb.com/jokes/random/${num}?escape=javascript`)
      .then((response) => {
        return response.json()
      }).then((obj) => {
        this.setState({ jokes: obj});
      });
  }

  render() {
    const cloneElement = React.cloneElement(this.props.children, {
      jokes: this.state.jokes,
      acceptInput: this.acceptInput.bind(this),
      numOfJokes: this.state.numOfJokes,
      getJokes: this.getJokes.bind(this)
    })

    return (
      <div>
        <Header />
        <RandomJokeDisplay joke={this.state.randomJoke}/>
        {cloneElement}
      </div>
    )
  }
}



// <GenerateJokes
//   acceptInput={this.acceptInput.bind(this)}
//   numOfJokes={this.state.numOfJokes}
//   getJokes={this.getJokes.bind(this)}
// />
