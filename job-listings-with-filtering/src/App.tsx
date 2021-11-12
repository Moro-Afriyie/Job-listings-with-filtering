import React from "react";
import "./App.scss";
import Card from "./components/Card";
import Filter from "./components/Filter";
import bgImage from "./assets/images/bg-header-desktop.svg";
import { useSelector } from "react-redux";
import { stateInterface } from "./models/interfaces";

function App() {
  const data = useSelector((state: stateInterface) => state.data);
  const filteredArray = useSelector(
    (state: stateInterface) => state.filteredArray
  );
  console.log(data);
  console.log(filteredArray);

  return (
    <main className="container">
      <div className="header">
        <img src={bgImage} alt="image" />
      </div>
      {filteredArray.length > 0 && <Filter />}
      <div className="cards__container">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              company={card.company}
              logo={card.logo}
              newP={card.newP}
              featured={card.featured}
              position={card.position}
              role={card.role}
              level={card.level}
              postedAt={card.postedAt}
              contract={card.contract}
              location={card.location}
              languages={card.languages}
              tools={card.tools}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
