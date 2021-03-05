import React from "react";

const Filter = () => {
  return (
    <div>
      <h4> Filters </h4>
      <article className="card-group-item">
        <header className="card-header">
          <h6 className="filter-header"> Category Type </h6>
        </header>
        <div className="filter-content">
          <div className="card-body">
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadio"
                value=""
              />
              <span className="form-check-label"> First hand items </span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadio"
                value=""
              />
              <span className="form-check-label"> Brand new items </span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadio"
                value=""
              />
              <span className="form-check-label"> Some other option </span>
            </label>
          </div>
        </div>
      </article>
      <article className="card-group-item">
        <header className="card-header">
          <h6 className="filter-header"> Year </h6>
        </header>
        <div className="filter-content">
          <div className="card-body">
            {/* <select className="selectpicker form-control">
              <option selected> Open this select menu </option>
              <option value="1"> One </option>
              <option value="2"> Two </option>
              <option value="3"> Three </option>
            </select> */}
          </div>
        </div>
      </article>
      <button type="button" className="btn btn-outline-warning">
        Apply
      </button>
    </div>
  );
};

Filter.displayName = "Filter";

export default Filter;
