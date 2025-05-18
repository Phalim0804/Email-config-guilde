import React from "react";
import "./title.css";

const title = ({ title, subTitle }) => {
  return (
    <div className="title">
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default title;
