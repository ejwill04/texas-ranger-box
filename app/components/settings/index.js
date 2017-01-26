import React from 'react';
import GenerateJokes from '../generateJokes/GenerateJokes';

const Settings = (props) => {
  console.log('in settings');
  return (
    <div>
      <div className='settings-wrapper'>
        Set Name:
        <input
          className='set-name-input'
          onChange={ (e) => props.handleNewName(e) }>
        </input>
        <button
          onClick={() => props.getJokes(props.numOfJokes)}
          >Set</button>
        <button
          onClick={ () => props.handleNewName() }
          >Reset</button>
        Parental Controls:
      </div>
    </div>
  );
};

export default Settings;
