import React from "react";
import {
  Pokecard,
  Pokecard_data,
  Pokecard_title,
  Pokecard_image,
} from "./pokecard.module.css";

const pokecard = ({ name, id, type, exp }) => {
  const API_LINK = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  let padTothree = (number) => number <= 9999 ? `00${number}`.slice(-3) : number;
  const getImage = `${API_LINK}${padTothree(id)}.png`;

  return (
    <div className={Pokecard}>
      <h4 className={Pokecard_title}>{name}</h4>
      <div className={Pokecard_image}>
        <img src={getImage} alt={`${name} not Found`} />
      </div>
      <p className={Pokecard_data}>
        <strong>Type:- </strong>
        {type}
      </p>
      <p className={Pokecard_data}>
        <strong>Points:-</strong>
        {exp}
      </p>
    </div>
  );
};

export default pokecard;
