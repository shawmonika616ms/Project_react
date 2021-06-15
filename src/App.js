import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Time from './Time';
import React from 'react';
import Sub from './Sub';
import List from './List';
import Ans, {Head} from './Ans';
import Images from './Images';

function App() {
  return (
    <React.Fragment>
    <Heading/>
    <List/>
    <Images/>
    <Time/>
    <Sub/>
    <h6>{Head}</h6>
    <Ans/>
    <Images/>
    </React.Fragment>
    
    
  );
}

export default App;
