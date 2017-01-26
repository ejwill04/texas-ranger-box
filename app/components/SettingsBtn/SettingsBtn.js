import React from 'react';
import { Link } from 'react-router';
import './settingsBtn-style';

const SettingsBtn = () => {
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
