import React from 'react';
import './header-style';

import SettingsBtn from '../SettingsBtn/SettingsBtn';

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.firstName} {props.lastName} Joke Machine</h1>
      <SettingsBtn />
    </div>
  );
}

export default Header;
