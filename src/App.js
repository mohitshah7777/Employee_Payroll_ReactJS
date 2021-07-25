import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import AddParent from "./components/Form/Employees";
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
