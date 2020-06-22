import React, { Component, useState, useEffect } from "react";
import "../Styling/Explore.css";
import cocktails from "../Data/drinks.json";
import LinkComponent from "../Components/LinkComponent";
import CardComponent from "../Components/CardComponent";

const Explore = () => {
  const [shownDrinks, setShownDrinks] = useState([]);

  const onSearchDrinks = () => {};

  return (
    <div id="page">
      <LinkComponent to="/home" title="Home" />
      <LinkComponent to="/explore" title="Explore" />
      <h1>Find your favourite drink!</h1>
      <form>
        <input className="box" type="text"></input>
        <button id="searchButton">Search</button>
      </form>
      <div id="results"></div>
    </div>
  );
};

export default Explore;
