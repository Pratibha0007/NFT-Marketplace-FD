import React from "react";

function NtfDetails() {
  return (
    <div className="ntfDetails">
      <div className="ntfTitle">
        <span>NFT Details</span>
      </div>
      <div className="listedContainer">
        <div>
          <h4>15</h4>
          <span>Listed</span>
        </div>
        <div>
          <h4>10</h4>
          <span>NFTized</span>
        </div>
        <div>
          <h4>5</h4>
          <span>Under Audit</span>
        </div>
      </div>
      <div className="vawebg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fffbf0"
            fill-opacity="1"
            d="M0,224L30,202.7C60,181,120,139,180,133.3C240,128,300,160,360,149.3C420,139,480,85,540,90.7C600,96,660,160,720,202.7C780,245,840,267,900,277.3C960,288,1020,288,1080,245.3C1140,203,1200,117,1260,80C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default NtfDetails;
