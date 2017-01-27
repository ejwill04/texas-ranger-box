import React from 'react';
import { Link } from 'react-router';
import FavoritesBtn from '../favoritesBtn';

const GenerateJokes = (props) => {
  return (
    <div>
      <Link
        to='/jokes'
        >
        <button
          onClick={() => props.getJokes() }
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
        onChange={ (e) => { props.acceptInput(e) }
      }>
      </input>
      <FavoritesBtn />
    </div>
  );
};

export default GenerateJokes;
