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
      firstName: 'Chuck',
      lastName: 'Norris',
    };
  }

  componentDidMount() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    fetch(`https://api.icndb.com/jokes/random?escape=javascript&firstName=${firstName}&lastName=${lastName}`)
      .then((response) => {
        return response.json()
      }).then((obj) => {
        this.setState({ randomJoke: obj.value.joke});
      });
  }

  acceptInput(e) {
    this.setState({ numOfJokes: +e.target.value });
  }

  handleNewName(input) {
    let fullName = input ? fullName = input.target.value : 'Chuck Norris';
    let nameArray = fullName.split(' ');
    this.setState({ firstName: nameArray[0], lastName: nameArray[1] })
  }

  getJokes(num) {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    fetch(`https://api.icndb.com/jokes/random/${num}?escape=javascript&firstName=${firstName}&lastName=${lastName}`)
      .then((response) => {
        return response.json()
      }).then((obj) => {
        this.setState({ jokes: obj});
      });
      this.componentDidMount();
  }

  render() {
    const cloneElement = React.cloneElement(this.props.children, {
      jokes: this.state.jokes,
      acceptInput: this.acceptInput.bind(this),
      numOfJokes: this.state.numOfJokes,
      getJokes: this.getJokes.bind(this),
      handleNewName: this.handleNewName.bind(this)
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
