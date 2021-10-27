import React from "react";
import "./App.scss";
import Card from "./components/Card";
import Filter from "./components/Filter";

function App() {
  return (
    <main className="App">
      <div className="header"></div>
      <Filter />
      <div className="body">
        <Card />
      </div>
    </main>
  );
}

export default App;
