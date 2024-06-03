import React from "react";
import EjectIcon from "@mui/icons-material/Eject";
function Cart({ statusGraph }) {
  return (
    <div className="statusCart">
      <div className="cartDetails">
        <h1>
          $26<span> Million</span>
        </h1>

        <span>Total NFT Value</span>
        <br />
        <span>Updated: 05:43</span>
      </div>
      <div className="cartStatus">
        <EjectIcon /> {statusGraph}
      </div>
    </div>
  );
}

export default Cart;
