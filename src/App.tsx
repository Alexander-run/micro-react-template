import React from 'react';
import logo from './logo192.png'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/reactSubApp' : '/'}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            react sub app
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
