import React from 'react';
import './styles/App.css';
import HelloWorld from './components/HelloWorld'

const App = () => {
  return (
  <div className="App">
    <HelloWorld name="Jim" />
    <HelloWorld name="Sally" />
  </div>
  );
};

export default App;
