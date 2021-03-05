import React from "react";
import { useQuery } from "react-query";
import { getPokemonDetail } from "./queries";
import { Link } from "react-router-dom";

function Detail({
  match: {
    params: { id }
  }
}) {
  //pass query name and params for query.
  const { data } = useQuery(["project", { id }], getPokemonDetail);

  return (
    <div className="container">
      <div className="card">
        <h1>ID: {id}</h1>
        <div className="img-container">
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
        <Link to="/">Return to List View</Link>
      </div>
    </div>
  );
}

export default Detail;
