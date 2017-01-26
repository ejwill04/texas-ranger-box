import React from 'react';
import './styles'
import { GenerateJokes } from '../generateJokes/GenerateJokes';

export const DisplayJokes = (props) => {
  let jokesObj = props.jokes.value || [];
  let jokeArena = jokesObj.map(obj => <div className='render-jokes' key={obj.id}>{obj.joke}</div>);
  console.log(jokesObj);
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
  )
}
