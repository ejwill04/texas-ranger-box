import React from 'react';
import './settings-style';
import GenerateJokes from '../generateJokes/GenerateJokes';

const Settings = (props) => {
  return (
    <div>
      <div className='settings-wrapper'>
        <div className='set-name'>
          Set Name:
          <input
            className='set-name-input'
            onChange={ e => props.handleNewName(e) }>
          </input>
          <button
            onClick={() => props.getJokes(props.numOfJokes)}
            >Set</button>
          <button
            onClick={ () => props.handleNewName() }
            >Reset</button>
        </div>
        <div className='parental-controls-wrapper'>
          <div className='parental-title'>Parental Controls:</div>
          <label className='switch'>
            <input
              type='checkbox'
              checked={props.explicitStatus}
              onClick={() => props.toggleParental()}
              />
            <div className='slider round'></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
