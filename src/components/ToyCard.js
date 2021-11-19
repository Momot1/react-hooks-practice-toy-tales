import React from "react";

function ToyCard({ toy, onDeleteClicked, onLikeClicked }) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => onLikeClicked(toy.id, toy.likes)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDeleteClicked(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
