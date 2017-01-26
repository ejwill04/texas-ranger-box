import React from 'react';
import { Link } from 'react-router';
// import './settingsBtn-style';

const FavoritesBtn = () => {
  return (
    <Link to='/favorites'>
      <input
        className='favoritesBtn'
        type='submit'
        value='Favorites'
        />
    </Link>
  );
};

export default FavoritesBtn;
