import React, { Component, useState } from "react";
import "../Styling/Explore.css";
import cocktails from "../Data/drinks.json";
import LinkComponent from "../Components/LinkComponent";
import CardComponent from "../Components/CardComponent";

const Explore = () => {
  const [shownDrinks, setShownDrinks] = useState([1, 2, 3, 4]);
  const [input, setInput] = useState();

  const printDrinks = () => {
    return shownDrinks.map((item, index) => {
      return (
        <CardComponent
          to="/drink"
          titleLink={cocktails.cocktails[shownDrinks[index]].name}
          imageSRC={cocktails.cocktails[shownDrinks[index]].image}
          titlePic={cocktails.cocktails[shownDrinks[index]].name}
          key={index}
        />
      );
    });
  };

  const onSearchDrinks = (searchWord) => {
    cocktails.cocktails.map((item, index) => {
      if (item.name.includes(searchWord)) {
        /*setShownDrinks([
          ...shownDrinks,
          {
            id: shownDrinks.length,
            value: index,
          },
        ]);*/
        //setShownDrinks((shownDrinks) => [...shownDrinks, index]);
      }
    });
  };

  return (
    <div id="page">
      <LinkComponent to="/home" title="Home" />
      <LinkComponent to="/explore" title="Explore" />
      <h1>Find your favourite drink!</h1>
      <form>
        <input className="box" type="text" value={input}></input>
        <button onClick={onSearchDrinks()} id="searchButton">
          Search
        </button>
      </form>
      <div id="results">{printDrinks()}</div>
    </div>
  );
};

export default Explore;
