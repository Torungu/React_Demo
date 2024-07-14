import React from "react";

const ItemPokemon = (props) => {
  let { image, name, attack, defense } = props.pokemon;
  return (
    <div className="border-2 border-green-900 p-5 rounded-lg mx-4 my-4">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <button className="bg-green-400 px-5 py-2 rounded-md">Details</button>
    </div>

    // ItemPokemon({pokemon})
    //     <div className="border-2 border-green-900 p-5 rounded-lg mx-4 my-4">
    //     <img src={pokemon?.image} alt="" />
    //     <h3>{pokemon?.name}</h3>
    //     <p>Attack: {pokemon?.attack}</p>
    //     <p>Defense: {pokemon?.defense}</p>
    //     <button className="bg-green-400 px-5 py-2 rounded-md">Details</button>
    //   </div>
  );
};

export default ItemPokemon;
