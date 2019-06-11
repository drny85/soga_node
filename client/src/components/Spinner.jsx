import React from "react";
import spinner from "../loading.gif";
import "../index.css"


export default function Spinner() {
  return (
    <div className="loading_div">
      <img className="loading_img" src={spinner} alt="" />
    </div>
  );
}
