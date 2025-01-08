import React from "react";

const Shipping = ({ imgShip, ShipHeading, ShipSubHeading, stylemaincard }) => {
  return (
    <div style={stylemaincard}>
      <img src={imgShip} alt="img" />
      <h5>{ShipHeading}</h5>
      <p>{ShipSubHeading}</p>
    </div>
  );
};

export default Shipping;
