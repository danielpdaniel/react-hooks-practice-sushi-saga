import React, {useState} from "react";

function Sushi({ sushi, onNewPlate, onSushiCost, cash }) {
  const [eaten, setEaten] = useState(false);
  const {name, img_url, price} = sushi;

 

  function handleEaten(){
    if(cash >= sushi.price){
    setEaten(true)
    onNewPlate();
    onSushiCost(sushi);
    } else {
      return null
    }
   
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
