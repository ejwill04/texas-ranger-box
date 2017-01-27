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
        className="favStar"
        onClick={ e => props.addToFavs(obj.id, e) }
        >&#9733;
      </div>
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

DisplayJokes.propTypes = {
  id: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  handleClick: React.PropTypes.func
}

export default DisplayJokes;
