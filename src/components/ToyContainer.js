import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteClicked, onLikeClicked }) {
  const toyElements = toys.map(toy => <ToyCard key={toy.id} toy={toy} onDeleteClicked={onDeleteClicked} onLikeClicked={onLikeClicked}/>)

  return (
    <div id="toy-collection">{toyElements}</div>
  );
}

export default ToyContainer;
