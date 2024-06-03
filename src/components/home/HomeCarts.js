import React, { useState } from "react";
import Cart from "./total/Cart";
import EjectIcon from "@mui/icons-material/Eject";
import NtfDetails from "./ntfDetails/NtfDetails";
import Table from "./table/Table";
import Overper from "./charts/Overper";
function HomeCarts() {
  const [statusGraph, setStatusGraph] = useState({
    nftValue: "+56",
  });
  return (
    <div className="homeCart">
      <div className="rightMainCont">
        <div className="homeCartsCont">
          <Cart />
          <Cart statusGraph={statusGraph.nftValue} />
          <Cart statusGraph={statusGraph.nftValue} />
          <NtfDetails />
        </div>

        <Table />
      </div>
      <div className="sideBar">
        <div>
          <Overper />
        </div>
      </div>
    </div>
  );
}

export default HomeCarts;
