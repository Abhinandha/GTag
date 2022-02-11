import React from 'react';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/' exact><Login /></Route>
              <Route path="/Home"><Home /></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;