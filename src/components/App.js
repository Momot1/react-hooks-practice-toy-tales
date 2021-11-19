import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(resp => resp.json())
      .then(data => setToys(data))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy){
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(resp => resp.json())
      .then(item => setToys([...toys, item]))
  }

  function deleteToy(id){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(() => {
        const updatedToys = toys.filter(toy => toy.id !== id)

        setToys(updatedToys)
      })
  }

  function updateLikes(id, likes){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: likes+1})
    })
      .then(resp => resp.json())
      .then(item => {
        const updatedToys = toys.map(toy => {
          if(toy.id === id){
            return {...toy, 'likes': likes+1}
          } else{
            return toy
          }
        })
        setToys(updatedToys)
      })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteClicked={deleteToy} onLikeClicked={updateLikes}/>
    </>
  );
}

export default App;
