import React, { useState, useEffect } from "react";
import "../Styling/Explore.css";
import cocktails from "../Data/drinks.json";
import LinkComponent from "../Components/LinkComponent";
import CardComponent from "../Components/CardComponent";

const Explore = () => {
  const [shownDrinks, setShownDrinks] = useState(cocktails.cocktails);
  const [toggleSearch, setToggle] = useState(true);
  const [currentCocktail, setCurrentCocktail] = useState();
  const [comments, setComments] = useState([
    { drink: 1, name: "Malin", title: "Wow", review: "Bra drink" },
    { drink: 1, name: "Malino", title: "Meh", review: "Ganska god änna" },
    { drink: 2, name: "Malin", title: "Eww", review: "Dålig drink faktiskt" },
    { drink: 3, name: "Malin", title: "Hm", review: "Ok drink" },
  ]);

  const addReview = (e) => {
    const newElement = {
      drink: currentCocktail,
      name: e.target.elements.name.value,
      title: e.target.elements.title.value,
      review: e.target.elements.review.value,
    };
    e.preventDefault();
    setComments([...comments, newElement]);
  };

  const printOutReview = () => {
    const timestamp = Date.now();
    return comments.map((item, index) => {
      if (
        cocktails.cocktails[item.drink].name ===
        cocktails.cocktails[currentCocktail].name
      ) {
        return (
          <div key={item.review} className="reviewCard">
            <p>By {comments[index].name}</p>
            <p id="time">
              {new Intl.DateTimeFormat("en-UK", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              }).format(timestamp)}
            </p>
            <h2>{comments[index].title}</h2>
            <p>{comments[index].review}</p>
          </div>
        );
      }
    });
  };

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
          <button id="seachButton">Search</button>
        </form>
        <div id="results">{printDrinks()}</div>
      </div>
    );
  };

  const drinkView = () => {
    return (
      <div id="page">
        <h1>{shownDrinks[currentCocktail].name}</h1>
        <p>{shownDrinks[currentCocktail].preparation}</p>
        <img src={shownDrinks[currentCocktail].image}></img>
        <br />
        <button
          id="prevButton"
          className="round"
          disabled={currentCocktail === 0}
          onClick={getPrevDrink}
        >
          {"<"}
        </button>
        <button className="round" id="returnButton" onClick={toggleView}>
          {"Return"}
        </button>
        <button
          id="nextButton"
          className="round"
          disabled={currentCocktail === shownDrinks.length - 1}
          onClick={getNextDrink}
        >
          {">"}
        </button>
        <br />

        <h3>Add a review!</h3>
        <form onSubmit={addReview}>
          <p>Name</p>
          <input name="name" type="textfield"></input>
          <p>Title</p>
          <input name="title" type="textfield"></input>
          <p>Review</p>

          <input name="review" id="review" type="textfield"></input>
          <br />
          <button className="round" id="submit">
            Submit
          </button>
        </form>
        {printOutReview()}
      </div>
    );
  };

  const getPrevDrink = () => {
    setCurrentCocktail(currentCocktail - 1);
  };

  const getNextDrink = () => {
    setCurrentCocktail(currentCocktail + 1);
  };

  const printDrinks = () => {
    if (!shownDrinks) {
      return <div>No drinks found</div>;
    } else
      return shownDrinks.map((item, index) => {
        return (
          <CardComponent
            toggle={() => toggleView(index)}
            titleLink={item.name}
            imageSRC={item.image}
            titlePic={item.name}
            key={index}
          />
        );
      });
  };
  const onSearchDrinks = (e) => {
    if (e) {
      e.preventDefault();
      const searchWord = e.target.elements.input.value.trim().toLowerCase();
      setShownDrinks(filterCocktails(searchWord));
    }
  };

  const filterCocktails = (searchWord) =>
    cocktails.cocktails.filter((cocktail) => {
      if (cocktail.name.toLowerCase().includes(searchWord)) {
        return cocktail;
      }
    });

  return <div>{returnView()}</div>;
};

export default Explore;

/*
import React, { useState } from "react";
import "../Styling/Explore.css";
import cocktails from "../Data/drinks.json";
import LinkComponent from "../Components/LinkComponent";
import CardComponent from "../Components/CardComponent";

const Explore = () => {
  const [shownDrinks, setShownDrinks] = useState([1, 2, 3, 4]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [toggleSearch, setToggle] = useState(true);
  const [currentCocktail, setCurrentCocktail] = useState();
  const [searchWord, setSearchWord] = useState();

  const savedComments = [
    { drink: 1, name: "Malin", review: "bra drink" },
    { drink: 1, name: "Simon", review: "dålig drink" },
  ];

  const addReview = (e) => {
    e.preventDefault();
    savedComments.push({
      drink: { currentCocktail },
      name: e.target.elements.name.value,
      review: e.target.elements.review.value,
    });
    console.log(savedComments);
  };
  const printOutReview = () => {
    return (
      <div>
        <p>Namn + tid</p>
        <h2>Rubrik</h2>
        <p>review</p>
      </div>
    );
  };

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
        <h1>{cocktails.cocktails[shownDrinks[currentCocktail]].name}</h1>
        <img
          src={cocktails.cocktails[shownDrinks[currentCocktail]].image}
        ></img>
        <p>{cocktails.cocktails[shownDrinks[currentCocktail]].preparation}</p>
        <button disabled={currentCocktail === 0} onClick={getPrevDrink}>
          {"<-"}
        </button>
        <button onClick={toggleView}>{"Return"}</button>
        <button
          disabled={currentCocktail === shownDrinks.length - 1}
          onClick={getNextDrink}
        >
          {"->"}
        </button>
        <br />

        <p>Add a review! </p>
        <form onSubmit={addReview}>
          <p>Name</p>
          <input name="name" type="textfield"></input>
          <br />
          <p>Review</p>

          <input name="review" id="review" type="textfield"></input>
          <br />

          <button>Submit</button>
        </form>
      </div>
    );
  };

  const getPrevDrink = () => {
    setCurrentCocktail(currentCocktail - 1);
  };

  const getNextDrink = () => {
    setCurrentCocktail(currentCocktail + 1);
  };

  const printDrinks = () =>
    shownDrinks.map((item, index) => {
      console.log(shownDrinks);
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

  const onSearchDrinks = (e) => {
    if (e) {
      e.preventDefault();
      const searchWord = e.target.elements.input.value.trim().toLowerCase();
      filterCocktails(searchWord);
      setShownDrinks(filteredDrinks);
      console.log(filteredDrinks);
    }
  };

  const filterCocktails = (searchWord) =>
    cocktails.cocktails.filter((cocktail, cocktailIndex) => {
      if (cocktail.name.toLowerCase().includes(searchWord)) {
        console.log(cocktailIndex);
        setFilteredDrinks((filteredDrinks) => [
          ...filteredDrinks,
          cocktailIndex,
        ]);
      }
    });

  return <div>{returnView()}</div>;
};

export default Explore;

*/
