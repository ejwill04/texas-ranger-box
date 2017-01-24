import React from 'react';
import './settingsBtn-style';

const SettingsBtn = (props) => {
  return (
    <input
      className='settingsBtn'
      type='submit'
      value='Settings'
      onClick={() => props.handleClick() }
      />
  );
}

export default SettingsBtn;
