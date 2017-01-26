import React from 'react';
import { Link } from 'react-router';

export const GenerateJokes = (props) => {
  return (
    <div>
      <Link
        to='/jokes'
        >
        <button
          onClick={() => props.getJokes(props.numOfJokes) }
          >
          Get Jokes
        </button>
      </Link>
      <input
        min={1}
        max={100}
        className='numOfJokes'
        type='number'
        value={ props.numOfJokes }
        onChange={ (e) => {props.acceptInput(e)} }>
      </input>
      <button
        >Favorites</button>
    </div>
  )
}
