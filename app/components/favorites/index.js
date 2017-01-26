import React from 'react';
// import './styles'
import GenerateJokes from '../generateJokes/GenerateJokes';

const DisplayFavorites = (props) => {
  const favoritesArena =  props.favorites.map(obj => <div className='render-favorites' key={obj.id}>{obj.joke}</div>);
  return (
    <div>
      <GenerateJokes
        acceptInput={props.acceptInput}
        jokes={props.params.jokes}
        numOfJokes={props.numOfJokes}
        getJokes={props.getJokes} />
      <div className='render-favorites-wrapper'>
        {favoritesArena}
      </div>
    </div>
  );
};

export default DisplayFavorites;
