import React from 'react';
import './settings-style';
import GenerateJokes from '../generateJokes';

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
            className='set-button'
            disabled={props.firstName === 'Chuck'}
            onClick={() => props.getJokes(props.numOfJokes)}
            >Set</button>
          <button
            className='reset-button'
            disabled={props.firstName === 'Chuck'}
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

Settings.propTypes = {
  favorites: React.PropTypes.array,
  jokes: React.PropTypes.array,
  addToFavs: React.PropTypes.func,
  acceptInput: React.PropTypes.func,
  numOfJokes: React.PropTypes.number,
  getJokes: React.PropTypes.func,
};

export default Settings;
