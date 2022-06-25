import React from "react";

const Card = ({ key, item }) => {
  console.log(item);
  return (
    <>
      <div className="card">
        <h1>Hi {key}</h1>
      </div>
    </>
  );
};

export default Card;
