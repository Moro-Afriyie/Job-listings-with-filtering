import React from "react";
import "./App.scss";
import Card from "./components/Card";
import Filter from "./components/Filter";

function App() {
  return (
    <main className="container">
      <div className="header">
        <h1>Header</h1>
      </div>
      <Filter />
      <div className="body">
        <Card />
      </div>
    </main>
  );
}

export default App;
