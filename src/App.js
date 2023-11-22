import React from 'react';
import './App.css';
import Canvas from './components/Canvas';


// require('dotenv').config()
const App = () => {
  return (
    <div className="App">
      <Canvas />
    </div>
  );
}

export default React.memo(App);
