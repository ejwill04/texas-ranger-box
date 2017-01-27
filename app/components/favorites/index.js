import React from 'react';
// import './styles'
import GenerateJokes from '../generateJokes/GenerateJokes';

const DisplayFavorites = (props) => {
  const favoritesArena = props.favorites.map(obj => <div className='render-jokes' key={obj.id}>{obj.joke}</div>);
  return (
    <div>
      <GenerateJokes
        acceptInput={props.acceptInput}
        jokes={props.params.jokes}
        numOfJokes={props.numOfJokes}
        getJokes={props.getJokes} />
      <div className='render-jokes-wrapper'>
        {favoritesArena}
      </div>
    </div>
  );
};

DisplayFavorites.propTypes = {
  favorites: React.PropTypes.array,
  jokes: React.PropTypes.array,
  addToFavs: React.PropTypes.func,
  acceptInput: React.PropTypes.func,
  numOfJokes: React.PropTypes.number,
  getJokes: React.PropTypes.func,
};

export default DisplayFavorites;
