import React from "react";
import "./App.scss";
import Card from "./components/Card";
import Filter from "./components/Filter";
import bgImage from "./assets/images/bg-header-desktop.svg";

function App() {
  return (
    <main className="container">
      <div className="header">
        <img src={bgImage} alt="image" />
      </div>
      <Filter />
      <div className="cards__container">
        <Card />
      </div>
    </main>
  );
}

export default App;
