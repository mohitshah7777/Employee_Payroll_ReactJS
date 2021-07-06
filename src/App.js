import React from "react";
import Register from "./pages/Register/register.component";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #3F51B5; }'}</style>
        </Helmet>
        <Register />
      </div>
    </HelmetProvider>

  );
}

export default App;
