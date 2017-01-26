import React from 'react';
import './styles';
import GenerateJokes from '../generateJokes/GenerateJokes';

const DisplayJokes = (props) => {
  const jokesObj = props.jokes.value || [];
  const jokeArena = jokesObj.map(obj =>
    <div
      className='render-jokes'
      key={obj.id}>
      {obj.joke}
      <div
        onClick={ () => props.addToFavs(obj.id) }
        >&#9733;</div>
    </div>);
  return (
    <div>
      <GenerateJokes
        acceptInput={props.acceptInput}
        jokes={props.params.jokes}
        numOfJokes={props.numOfJokes}
        getJokes={props.getJokes} />
      <div className='render-jokes-wrapper'>
        {jokeArena}
      </div>
    </div>
  );
};

export default DisplayJokes;
