import React from "react";
import './menu-item.component.scss'

const MenuItem = ({ title, imageUrl, size}) => {
  return (
    <div className={`${size} menu-item`}>
      {" "}
      <div className="background-image"
            style={
              {
                backgroundImage:`url(${imageUrl})`
              }
            }
      > </div>
      <div className="content">
        <h1 className="title">{title}</h1>{" "}
      </div>{" "}
    </div>
  );
};

export default MenuItem;
