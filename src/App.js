import React from "react";
import Register from "./pages/Register/register.component";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #3F51B5; }'}</style>
      </Helmet>
      <Register />
    </div>
  );
}

export default App;
