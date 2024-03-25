// import { useState } from 'react';
import logo from "./assets/Learnable logo 3.svg";
import ball from "./assets/Vector (4).svg";
import research from "./assets/Vector (5).svg";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineRadiusSetting } from "react-icons/ai";
import { SiBackendless, SiFrontendmentor } from "react-icons/si";
import { MdPowerSettingsNew, MdWebhook } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import "./sidenavbar.css";
// import "./style.css";
import Profiles from "./profiles";

const ReactSideBar = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="cost">
      <div className="div">
        <div
          className={show ? "sidebar1" : "sidebar"}
          onClick={() => setshow(!show)}
        >
          <img
            src={logo}
            alt="LOGO"
            className={show ? "learnable-logo1" : "learnable-logo"}
          />
          <div className="navbar-container">
            <li onClick={() => setshow(!show)}>
              <AiOutlineHome className="icon" />
              {show ? "" : <h2 className="font-style">Home</h2>}
            </li>
            <li onClick={() => setshow(!show)}>
              <SiFrontendmentor className="icon" />
              {show ? "" : <h2 className="font-style">FrontEnd</h2>}
            </li>
            <li onClick={() => setshow(!show)}>
              <SiBackendless className="icon" />
              {show ? "" : <h2 className="font-style">BackEnd</h2>}
            </li>
            <li onClick={() => setshow(!show)}>
              <MdWebhook className="icon" />
              {show ? "" : <h2 className="font-style">Web3</h2>}
            </li>
            <li onClick={() => setshow(!show)}>
              <FaProductHunt className="icon" />
              {show ? "" : <h2 className="font-style">ProductDesign</h2>}
            </li>
            <div className="set-out">
              <li onClick={() => setshow(!show)}>
                <AiOutlineRadiusSetting className="icon" />
                {show ? "" : <h2 className="font-style">Setting</h2>}
              </li>
              <li onClick={() => setshow(!show)}>
                <MdPowerSettingsNew className="icon" />
                {show ? "" : <h2 className="font-style">LogOut</h2>}
              </li>
            </div>
          </div>
        </div>
        <header className="header-bar">
          <h3>ProductDesign</h3>
          <div className="form-content">
            <img src={ball} alt="ball" />
            <div className="input-name">
              <img src={research} alt="ball" />
              <p>Search Intern</p>
            </div>
          </div>
        </header>
      </div>
      <Profiles></Profiles>
    </div>
  );
};

export default ReactSideBar;
