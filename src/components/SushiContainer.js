import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, minIndex, maxIndex, onMoreSushi, onNewPlate, onSushiCost, cash}) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */
      sushis.map(sushi => sushi.id < maxIndex ? sushi.id > minIndex ? <Sushi key={sushi.id} sushi={sushi} onNewPlate={onNewPlate} onSushiCost={onSushiCost} cash={cash}/> : null : null)
      }
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
