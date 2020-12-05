import React from "react";
import Pokecard from "./pokecard/Pokecard";
import {
  Pokedex,
  Pokedexcards,
  Pokedex_winner,
  Pokedex_loser,
} from "./Pokedeck.module.css";

const pokedeck = (props) => {
  return (
    <div className={Pokedex}>
      <p>Total Points:- {props.points}</p>
      <p className={props.isWinner ? Pokedex_winner : Pokedex_loser}>
        {props.isWinner ? "Winner.!" : "Loser.!"}
      </p>
      <div className={Pokedexcards}>
        {props.pokeDetails.map((poke) => {
          return (
            <Pokecard
              key={poke.id}
              name={poke.name}
              id={poke.id}
              type={poke.type}
              exp={poke.base_experience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default pokedeck;
