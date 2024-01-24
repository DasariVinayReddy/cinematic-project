import "./App.css";
import React from "react";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
