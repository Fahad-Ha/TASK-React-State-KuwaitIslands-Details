import React, { useState } from "react";
import IslandForm from "./IslandForm";

export default function Island({ island, changeIsland }) {
  const [visitors, setVisitors] = useState(0);
  return (
    <div onClick={() => changeIsland(island)} className="Island">
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
