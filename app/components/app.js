import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles'
import Header from './Header/Header'
import { Link } from 'react-router';
import GenerateJokes from './generateJokes/GenerateJokes';
import RandomJokeDisplay from './randomJokeDisplay/randomJokeDisplay';
import DisplayJokes from './displayJokes/DisplayJokes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: '',
      jokes: [],
      numOfJokes: '',
      firstName: 'Chuck',
      lastName: 'Norris',
      favorites: [],
      parentalControls: '',
    };
  }

  componentDidMount() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    fetch(`https://api.icndb.com/jokes/random?escape=javascript&firstName=${firstName}&lastName=${lastName}`)
      .then((response) => {
        return response.json();
      }).then((obj) => {
        this.setState({ randomJoke: obj.value.joke });
      });
  }

  addToFavs(id) {
    const array = this.state.jokes.value;
    const object = array.find(obj => obj.id === id);
    object.favorites = true;
    this.state.favorites.push(object);
    this.setState({ favorites: this.state.favorites });
  }

  toggleParental() {
    if (this.state.parentalControls === '') {
      this.setState({ parentalControls: 'limitTo=[explicit]' });
    } else {
      this.setState({ parentalControls: '' });
    }
  }

  acceptInput(e) {
    this.setState({ numOfJokes: +e.target.value });
  }

  handleNewName(input) {
    const fullName = input ? input.target.value : 'Chuck Norris';
    const nameArray = fullName.split(' ');
    this.setState({ firstName: nameArray[0], lastName: nameArray[1] });
  }

  getJokes() {
    fetch(`http://api.icndb.com/jokes/random/${this.state.numOfJokes}/?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}&${this.state.parentalControls}`)
      .then((response) => {
        return response.json();
      }).then((obj) => {
        obj.value.map(joke => Object.assign(joke, { favorites: false }));
        this.setState({ jokes: obj });
      });
  }

  render() {
    const cloneElement = React.cloneElement(this.props.children, {
      jokes: this.state.jokes,
      acceptInput: this.acceptInput.bind(this),
      numOfJokes: this.state.numOfJokes,
      getJokes: this.getJokes.bind(this),
      handleNewName: this.handleNewName.bind(this),
      addToFavs: this.addToFavs.bind(this),
      favorites: this.state.favorites,
      toggleParental: this.toggleParental.bind(this),
      explicitStatus: this.state.parentalControls,
    });

    return (
      <div>
        <Header />
        <RandomJokeDisplay joke={this.state.randomJoke}/>
        {cloneElement}
      </div>
    );
  }
}
