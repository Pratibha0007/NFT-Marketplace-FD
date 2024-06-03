import React from "react";
import { LineChart } from "@mui/x-charts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapsible from "react-collapsible";
import Graph from "../../../assets/assets/images/graph1.png";
import Graph2 from "../../../assets/assets/images/graph2.png";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
function Overper() {
  return (
    <div>
      <div className="overper">
        <p>Overall Performance</p>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div className="totalValue">
        <div id="rates">
          <h2>Best</h2>
          <h2>$9530.00</h2>
        </div>
        <div id="rates">
          <h2>Today</h2>
          <h2>$4095.00 </h2>
        </div>
        <div id="rates">
          <Collapsible trigger={<KeyboardArrowDownIcon />}>
            <div className="watchListTrade">
              <div>
                <p>Zynk</p>
                <span>NFT 1Inc</span>
              </div>
              <div>
                <img src={Graph} />
              </div>
              <div className="totalArrow" id="secondArrow">
                <h4>1658.00</h4> <NorthIcon />
              </div>
            </div>
            <div className="watchListTrade">
              <div>
                <p>Zynk</p>
                <span>NFT 1Inc</span>
              </div>
              <div>
                <img src={Graph2} />
              </div>
              <div className="totalArrow">
                <h4>1658.00</h4> <SouthIcon />
              </div>
            </div>
            <div className="watchListTrade">
              <div>
                <p>Zynk</p>
                <span>NFT 1Inc</span>
              </div>
              <div>
                <img src={Graph} />
              </div>
              <div className="totalArrow">
                <h4>1658.00</h4> <NorthIcon />
              </div>
            </div>
          </Collapsible>
        </div>
        <div id="notification">
          <Collapsible trigger={<KeyboardArrowDownIcon />}>
            <div className="watchListTrade">
              <div>
                <p>Novo NFT</p>
                <span>
                  is minted and ready to be published in the marketplace
                </span>
                <span>March 15, 2024 10:30:45</span>
              </div>
            </div>
            <div className="watchListTrade">
              <div>
                <p>Novo NFT</p>
                <span>
                  is minted and ready to be published in the marketplace
                </span>
                <span>March 15, 2024 10:30:45</span>
                <span>March 15, 2024 10:30:45</span>
              </div>
            </div>
            <div className="watchListTrade">
              <div>
                <p>Novo NFT</p>
                <span>
                  is minted and ready to be published in the marketplace
                </span>
                <span>March 15, 2024 10:30:45</span>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}

export default Overper;
