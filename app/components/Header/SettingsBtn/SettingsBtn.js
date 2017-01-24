import React from 'react';
import './settingsBtn-style';

const SettingsBtn = (props) => {
  return (
    <input
      type='submit'
      value='Settings'
      onClick={() => props.handleClick() }
      />
  );
}

export default SettingsBtn;
