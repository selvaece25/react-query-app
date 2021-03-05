import React from "react";

const AddFavourite = ({ title }) => {
  return (
    <>
      <span className="mr-2">{title} </span>
    </>
  );
};
AddFavourite.displayName = "AddFavourite";

export default AddFavourite;
