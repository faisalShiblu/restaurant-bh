import React from 'react';
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import myStore from './Redux/Store'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
