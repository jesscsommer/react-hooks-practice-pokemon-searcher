import React, { useState } from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = ({ name, sprites: {front, back}, hp }) => {
  const [isFront, setIsFront] = useState(true)

  const handleClick = () => {
    setIsFront(isFront => !isFront)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt="oh no!" src={isFront ? front : back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
