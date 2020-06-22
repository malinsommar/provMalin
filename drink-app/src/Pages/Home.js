import React from "react";
import "../Styling/Home.css";
import cocktails from "../images/drinks.jpg";
import LinkComponent from "../Components/LinkComponent";

const Home = () => {
  return (
    <div id="page">
      <LinkComponent to="/home" title="Home" />
      <LinkComponent to="/explore" title="Explore" />
      <h1>Welcome to The Cocktail Explorer!</h1>
      <img src={cocktails} alt="cocktails" />
    </div>
  );
};

export default Home;
