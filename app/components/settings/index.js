import React from 'react';
import { GenerateJokes } from '../generateJokes/GenerateJokes';

export const Settings = (props) => {
  console.log('settings page');
  return (
    <div>
      <GenerateJokes
        acceptInput={props.acceptInput}
        jokes={props.params.jokes}
        numOfJokes={props.numOfJokes}
        getJokes={props.getJokes} />
      <div className='settings-wrapper'>
      </div>
    </div>
  )
}
