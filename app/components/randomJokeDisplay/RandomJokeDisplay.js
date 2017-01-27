import React from 'react';
import './randomJoke-styles';

const RandomJokeDisplay = (props) => {
  return (
    <div className='random-joke'>
      {props.joke}
    </div>
  );
};

RandomJokeDisplay.propTypes = {
  joke: React.PropTypes.string,
};

export default RandomJokeDisplay;
