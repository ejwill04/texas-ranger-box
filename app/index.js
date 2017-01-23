import React from 'react'
import { render } from 'react-dom'
import './styles'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Header />
  );
}

render(<App />, document.querySelector('.application'));
