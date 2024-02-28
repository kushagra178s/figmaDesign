import React from "react";

export default function Deal() {
  return (
    <div className="deal">
      <img src={require("../images/productImage.png")} alt="" />
      <div className="deal-offers">
        <div className="deal-offer">20% Off</div>
        <div className="deal-offer">Limited time </div>
      </div>
      <div className="deal-title">Webbuilder 1</div>
      <div className="deal-description">Computer  Modern clasic with wix support</div>
      <div className="deal-prices">
        <div>$39.92</div>
        <div className="small-text">$49.92</div>
        <div className="small-text">(20% Off)</div>
      </div>
      <button className="deal-button">View Deal</button>
    </div>
  );
}
