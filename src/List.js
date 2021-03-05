import React from "react";
import { getPokemonList } from "./queries";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function List() {
  const { data, refetch, error } = useQuery("posts", getPokemonList, {});

  // Short circut if there is an error state and return.
  if (error) {
    return <div>There was an Error</div>;
  }

  // If there is no data do return nothing
  if (!data) {
    return <button onClick={() => refetch()}>Fetch Pokemon</button>;
  }
  return (
    <div className="container">
      Selva
      <ul className="list">
        {data.results.map((item) => (
          <li key={item.name} className="list-item">
            <Link to={item.name}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
