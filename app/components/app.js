import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import '../styles';
import Header from './Header';
import GenerateJokes from './generateJokes';
import RandomJokeDisplay from './randomJokeDisplay';
import DisplayJokes from './displayJokes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: '',
      jokes: [],
      numOfJokes: undefined,
      firstName: 'Chuck',
      lastName: 'Norris',
      favorites: [],
      parentalControls: '',
    };
  }

  componentDidMount() {
    // const firstName = this.state.firstName;
    // const lastName = this.state.lastName;
    fetch(`https://api.icndb.com/jokes/random?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
      .then(response => response.json())
      .then((obj) => {
        this.setState({ randomJoke: obj.value.joke });
      });
  }

  addToFavs(id, e) {
    e.target.classList.toggle('favStar-clicked');
    const array = this.state.jokes.value;
    const object = array.find(obj => obj.id === id);
    object.favorites = !object.favorites;
    if (object.favorites) {
      this.state.favorites.push(object);
    } else {
      this.state.favorites.pop(object);
    }
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
      .then(response => response.json())
      .then((obj) => {
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
      firstName: this.state.firstName,
    });

    return (
      <div>
        <Header firstName={this.state.firstName} lastName={this.state.lastName} />
        <RandomJokeDisplay joke={this.state.randomJoke}/>
        {cloneElement}
      </div>
    );
  }
}
