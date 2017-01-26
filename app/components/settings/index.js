import React from 'react';
import { GenerateJokes } from '../generateJokes/GenerateJokes';

export const Settings = (props) => {
  console.log('in settings');
  return (
    <div>
      <GenerateJokes
        acceptInput={props.acceptInput}
        jokes={props.params.jokes}
        numOfJokes={props.numOfJokes}
        getJokes={props.getJokes} />
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
  )
}
