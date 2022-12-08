import React, { useState, useEffect } from "react";
import "./card.scss";

export default function Card({ data }) {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const result = await fetch(data.url);
      const res = await result.json();
      setPokemon(res);
    };
    sendRequest();
  }, [data.url]);

  return (
    <>
      {pokemon !== "" ? (
        <div className="card">
          <div className="front">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt="pokemon"
            />
            <h1>{pokemon.name}</h1>
          </div>
          <div className="back">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt="pokemon"
            />
            <div className="content">
              <h2>{pokemon.name}</h2>
              <div className="abilities">
                {pokemon.abilities.map((ability) => {
                  return <span key={ability.slot}>{ability.ability.name}</span>;
                })}
              </div>
              <div className="stats">
                <div>
                  {pokemon.stats.slice(0, 3).map((poke) => {
                    return (
                      <span key={poke.stat.name}>
                        {poke.stat.name}: {poke.base_stat}
                      </span>
                    );
                  })}
                </div>
                <div>
                  {pokemon.stats.slice(3, 6).map((poke) => {
                    return (
                      <span key={poke.stat.name}>
                        {poke.stat.name}: {poke.base_stat}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
