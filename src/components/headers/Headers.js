import React from "react";
import logo from "../../assets/assets/images/logo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Headers() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} id="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Overview
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Create NFT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Publish NFT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">Trade NFT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">
                  <NotificationsIcon />
                </a>
              </li>
            </ul>
            <div className="leftSideMenu">
              <AccountCircleIcon />
              <div className="userTitle">
                <h3>Anush Jafer</h3>
                <span>NFT Owner</span>
              </div>
              <div className="dropIcon">
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Headers;
