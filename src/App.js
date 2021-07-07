import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SignInOutContainer from "./pages/container";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #3F51B5; }'}</style>
        </Helmet>
        <SignInOutContainer />
      </div>
    </HelmetProvider>

  );
}

export default App;
