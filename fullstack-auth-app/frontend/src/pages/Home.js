import React from "react";
import CardForm from "../components/CardForm";
import DisplayCard from "../components/DisplayCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <CardForm />
      <DisplayCard />
    </div>
  );
};

export default Home;
