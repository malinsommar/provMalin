import React from "react";
import "../Styling/Default.css";

const DrinkPage = () => {
  return (
    <div id="page">
      <LinkComponent to="/home" title="Home" />
      <LinkComponent to="/explore" title="Explore" />
      <h1>{}</h1>
      <img id="drinks" src={cocktails} alt="cocktails" />
    </div>
  );
};

export default DrinkPage;
