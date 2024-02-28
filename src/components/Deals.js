import React from "react";
import Deal from "./Deal";
export default function Deals() {
  return (
    <div className="deals">
      <h2>Related deals you might like for</h2>
      <div className="deals-options">
        <Deal />
        <Deal />
        <Deal />
      </div>
      <div className="deals-signup">
        <div className="deals-signup-text">
          Sign up and get exclusive special deals
        </div>
        <div>
          <input type="text" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
