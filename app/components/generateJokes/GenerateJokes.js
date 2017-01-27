import React from 'react';
import { Link } from 'react-router';
import './generateJokes-styles';
import FavoritesBtn from '../favoritesBtn';

const GenerateJokes = (props) => {
  return (
    <div className='generate-jokes'>
      <div className='input-num'>
        <Link to='/jokes'>
          <button
            className='getJokesBtn'
            disabled={props.numOfJokes === undefined}
            onClick={() => props.getJokes() }>
            Get Jokes
          </button>
        </Link>
        <input
          min={1}
          max={100}
          className='numOfJokes'
          type='number'
          value={ props.numOfJokes }
          onChange={ (e) => { props.acceptInput(e); }
        }>
        </input>
      </div>
      <FavoritesBtn />
    </div>
  );
};

GenerateJokes.propTypes = {
  acceptInput: React.PropTypes.func,
  numOfJokes: React.PropTypes.number,
  getJokes: React.PropTypes.func,
};

export default GenerateJokes;
