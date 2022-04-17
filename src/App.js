import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Count from './container/Count';
// import CountUI from './component/count'
import store from './redux/store'
import Person from './container/person';

function App() {
  return (
    <div>
      <Count />
      <hr />
      <Person />
    </div>
  );
}

export default App;

