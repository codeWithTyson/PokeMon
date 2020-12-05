import React, { Component } from 'react';
import Pokedeck from './../../components/pokedeck/Pokedeck';

class PokemonGame extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokemonChar: [
                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
              ]
         }
    }
    render() { 

        const hand1 = [];
        const hand2 = [...this.state.pokemonChar];

        while(hand1.length < hand2.length) {
            const randomIndex = Math.floor(Math.random() * hand2.length);
            const randomPoke = hand2.splice(randomIndex,1)[0];

            hand1.push(randomPoke);
        }

        const points1 = hand1.reduce((prev,poke) => {
            return prev + poke.base_experience
        }, 0)
        const points2 = hand2.reduce((prev,poke) => {
            return prev + poke.base_experience
        }, 0)

        return ( 
            <React.Fragment>
                 <h1 style={{textAlign: 'center'}}>Pokedex</h1>
                <Pokedeck pokeDetails={hand1} points={points1} isWinner={points1 > points2} />
                <Pokedeck pokeDetails={hand2} points={points2} isWinner={points2 > points1} />
            </React.Fragment>
         );
    }
}
 
export default PokemonGame;