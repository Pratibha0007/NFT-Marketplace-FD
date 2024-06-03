import React from "react";
import HomeCarts from "./HomeCarts";
function Home() {
  return (
    <>
      <div className="coverContainer">
        <div className="welComeMsgContainer">
          <h1>Welcome Paul,</h1>
          <p>
            Your dashboard for creating, tracking, and managing digital holdings
          </p>
        </div>
        <div className="notiContainer">
          <span>
            <strong>NFT Owner</strong>
          </span>
          <span>
            You have <span id="yellow">5 new</span> notifications
          </span>
          <span>Last login: 14 March, 2024 11:43:23</span>
        </div>
      </div>
      <HomeCarts />
    </>
  );
}

export default Home;
