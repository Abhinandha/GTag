import React from 'react';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path = '/home' element= {<Home />}></Route>
              <Route path = '/' element= {<Login />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
