import React from 'react';
import { Link } from 'react-router';
import './favoritesBtn-styles';
// import './settingsBtn-style';

const FavoritesBtn = (props) => {
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

FavoritesBtn.propTypes = {
  favorites: React.PropTypes.array,
};

export default FavoritesBtn;
