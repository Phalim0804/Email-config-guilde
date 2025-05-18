import React from "react";
import "./ArrayList.css";

const ArrayList = ({ data }) => {
  return (
    <>
      <div className="arrayList">
        <section className="rightSection">
          {data.map((item, index) => (
            <div data-item={item} key={index} className="arrayItem">
              <h2>{item.title}</h2>
              <img src={item.image} alt="" className="arrayImg" />
              <p className="arrayP">{item.text}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default ArrayList;
