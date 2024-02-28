import React from "react";
export default function Product(props) {
  const data = props.props;
  console.log(data.additionalHighlights);
  return (
    <div className="product">
      <div className="id">{data.id}</div>
      <div className="product-image">
        {data.best === true && (
          <div className="span-product">
            <span className="best-choice-label">
              {data.bestText === "Best Choice" ? (
                <img src={require("../images/trophy.png")} alt="" />
              ) : (
                <img src={require("../images/diamond.png")} alt="" />
              )}
              {data.bestText}
            </span>
          </div>
        )}
        <img
          src={require("../images/productImage.png")}
          height="102px"
          width="141px"
          alt=""
        />
        Builder 1
      </div>
      <div className="product-content">
        <strong>{data.descriptionTitle}</strong>
        {data.description}
        <br />
        <br />
        <strong>Main Highlights</strong>
        <br />
        <br />
        <div className="Main-Highlights">{data.mainHighlights}</div>
        {data.additionalHighlights !== false && (
          <div className="additional-highlights">
            {data.additionalHighlights.map((item, index) => (
              <div key={index}>{item.slice(0,4)} {item.slice(4)}</div>
            ))}
          </div>
        )}
        {data.whyweloveit.length > 0 && (
          <div className="why-we-love-it">
            <div>Why We Love It</div>
            {data.additionalHighlights.map((item, index) => (
              <div key={index}> <img src={require("../images/rightsign.png")} alt="" /> {" "}{item}</div>
            ))}
          </div>
        )}
        <br />
        <div style={{ color: "#1B88F4" }}>
          Show More <img src={require("../images/showmore.png")} alt="" />
        </div>
      </div>
      <div className="product-rating">
        <div className="rating-box">
          <div className="product-rating-image">
            <img src={require("../images/i.png")} alt="" />
          </div>
          <div className="product-rating-value">{data.rating}</div>
          <div>{data.ratingName}</div>
          <div>{data.stars}</div>
        </div>
        <button>View</button>
      </div>
    </div>
  );
}
