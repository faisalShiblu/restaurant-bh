import React from 'react';
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
