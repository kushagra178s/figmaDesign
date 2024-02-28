import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-title">Categories</div>
        <div>Web Builder</div>
        <div>Hosting</div>
        <div>Data Center</div>
        <div>Robotic-Automation</div>
      </div>
      <div className="footer-content">
        <div className="footer-title">Contact</div>
        <div>Contact</div>
        <div>Privacy Policy</div>
        <div>Terms Of Service</div>
        <div>About</div>
      </div>
      <div className="footer-content">
        <div style={{marginTop:"45px"}}>
          United States <img src={require("../images/showmore.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
