import React from "react";
import "../Styling/Default.css";
import LinkComponent from "../Components/LinkComponent";

const DrinkPage = () => {
  return (
    <div id="page">
      <LinkComponent to="/home" title="Home" />
      <LinkComponent to="/explore" title="Explore" />
      <h1>{}</h1>
    </div>
  );
};

export default DrinkPage;
