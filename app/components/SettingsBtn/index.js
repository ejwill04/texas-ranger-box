import React from 'react';
import { Link } from 'react-router';
import './settingsBtn-style';

const SettingsBtn = (props) => {
  if (window.location.pathname === '/settings') {
    return (
      <Link to='/jokes'>
        <input
          className='settingsBtn'
          type='submit'
          value='Jokes'
          />
      </Link>
    );
  }
  return (
    <Link to='/settings'>
      <input
        className='settingsBtn'
        type='submit'
        value='Settings'
        />
    </Link>
  );
};

export default SettingsBtn;
