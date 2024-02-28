import React from "react";

const BodyHeader = () => {
  return (
    <div className="body-header">
      <h1>Best Website builders in the US</h1>
      <hr />
      <div className="body-header-update">
        <div className="image-text-baseline-center">
            <img src={require("../images/clock.png")} alt="" />  Last Updated - February 22, 2024 <img src={require("../images/bigi.png")} alt="" /> Advertising Disclosure
        </div>
        <div>
            Top Relevent <img src={require("../images/showmore.png")} alt="" />
        </div>
      </div>
      <hr />
      <div className="body-header-options">
        <div>Tools</div>
        <div>AWS Builder</div>
        <div>Start Build</div>
        <div>Build Supplies</div>
        <div>Tooling</div>
        <div>BlueHosting</div>
      </div>
      <div className="body-header-navigation">
        <div>Home <img src={require("../images/Vector.png")} alt="" /></div>
        <div>Hosting for all <img src={require("../images/Vector.png")} alt="" /></div>
        <div>Hosting <img src={require("../images/Vector.png")} alt="" /></div>
        <div>Hosting6 <img src={require("../images/Vector.png")} alt="" /></div>
        <div>Hosting5</div>
      </div>
    </div>
  );
};

export default BodyHeader;
