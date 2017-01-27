import React from 'react';
import './settings-style';
import GenerateJokes from '../generateJokes/GenerateJokes';

// const checkedStatus = () => {
//   return 0 ? 1 : 0;
// };

const Settings = (props) => {
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
  );
};

export default Settings;
