import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header headerTitle="React practice, contact list"></Header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
