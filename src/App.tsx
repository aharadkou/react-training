import './App.css';
import ComponentClass from './components/component-class';
import PureComponentClass from './components/pure-component-class';
import Functional from './components/functional';
import CreateElement from './components/create-element';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <ComponentClass></ComponentClass>
      <PureComponentClass></PureComponentClass>
      <Functional></Functional>
      <CreateElement></CreateElement>
    </React.Fragment>
  );
}

export default App;
