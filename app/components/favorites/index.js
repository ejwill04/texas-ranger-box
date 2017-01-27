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

export default DisplayFavorites;
