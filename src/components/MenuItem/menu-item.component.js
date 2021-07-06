import React from "react";

const MenuItem = ({title}) => {
  return (
    <div className="menu-item">
      {" "}
      <div className="background-image"> </div>
      <div className="content">
        <h1 className="title">title</h1>{" "}
      </div>{" "}
    </div>
  );
};

export default MenuItem;