import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState(false);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(5);
  const [plates, setPlates] = useState([])
  const [cash, setCash] = useState(100)

  useEffect(()=>{
    fetch(API)
    .then(resp=>resp.json())
    .then(data=>setSushis(data))
  }, [])

  function handleMoreSushi() {
    setMinIndex(minIndex => minIndex + 4);
    setMaxIndex(maxIndex => maxIndex + 4)
  };

  function handleNewPlate(){
    const newPlatesArr = [...plates, "plate"]
    setPlates(newPlatesArr)
  }

function handleSushiCost(sushi){
    setCash(cash=>cash-sushi.price)
  }

  return (
    <div className="app">
      {sushis ?
      <SushiContainer 
      sushis={sushis} 
      minIndex={minIndex}
      maxIndex={maxIndex} 
      onMoreSushi={handleMoreSushi}
      onNewPlate={handleNewPlate}
      onSushiCost={handleSushiCost}
      cash={cash}/>
      : <h2>Loading...</h2>
      }
      <Table plates={plates} cash={cash}/>
    </div>
  );
}

export default App;
