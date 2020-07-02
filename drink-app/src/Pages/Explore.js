import React, { useState, useEffect } from "react";
import "../Styling/Explore.css";
import cocktails from "../Data/drinks.json";
import LinkComponent from "../Components/LinkComponent";
import CardComponent from "../Components/CardComponent";

const Explore = () => {
  const [shownDrinks, setShownDrinks] = useState([1, 2, 3, 4]);
  const [toggleSearch, setToggle] = useState(true);
  const [currentCocktail, setCurrentCocktail] = useState();

  const toggleView = (cocktailClicked) => {
    if (toggleSearch) {
      setCurrentCocktail(cocktailClicked);
      setToggle(false);
    } else setToggle(true);
  };

  const returnView = () => {
    if (toggleSearch) {
      return searchView();
    } else return drinkView();
  };

  const searchView = () => {
    return (
      <div id="page">
        <LinkComponent to="/home" title="Home" />
        <LinkComponent to="/explore" title="Explore" />
        <h1>Find your favourite drink!</h1>
        <form onSubmit={onSearchDrinks}>
          <input name="input" className="box" type="textfield"></input>
          <button>Search</button>
        </form>
        <div id="results">{printDrinks()}</div>
      </div>
    );
  };

  const drinkView = () => {
    return (
      <div id="page">
        <LinkComponent to="/home" title="Home" />
        <LinkComponent to="/explore" title="Explore" />
        <h1>{cocktails.cocktails[shownDrinks[currentCocktail]].name}</h1>
        <img
          src={cocktails.cocktails[shownDrinks[currentCocktail]].image}
        ></img>
        <p>{cocktails.cocktails[shownDrinks[currentCocktail]].preparation}</p>
      </div>
    );
  };

  const printDrinks = () => {
    return shownDrinks.map((item, index) => {
      return (
        <CardComponent
          toggle={() => toggleView(index)}
          titleLink={cocktails.cocktails[shownDrinks[index]].name}
          imageSRC={cocktails.cocktails[shownDrinks[index]].image}
          titlePic={cocktails.cocktails[shownDrinks[index]].name}
          key={index}
        />
      );
    });
  };

  const onSearchDrinks = (e) => {
    if (e) {
      e.preventDefault();
      const searchWord = e.target.elements.input.value.trim().toLowerCase();
      /*const results = cocktails.cocktails.filter((index) =>
        index.name.toLowerCase().includes(searchWord)
      );*/
      setShownDrinks(filterCocktails(searchWord));
    }
  };

  const filterCocktails = (searchWord) =>
    cocktails.cocktails.filter((cocktail) => {
      return cocktail.name.toLowerCase().includes(searchWord);
    });

  return <div>{returnView()}</div>;
};

export default Explore;
