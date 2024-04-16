import React, { useEffect, useState } from "react";
import "./Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlateWheat } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {

    return (
        <div className="header">
          <div className="header-left">
            <ul>
              <li>
                <FontAwesomeIcon icon={faPlateWheat} />
              </li>
              <li><a>Bread</a></li>
              <li><a>Bakery</a></li>
            </ul>
          </div>
          <div className="header-right">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
    );
}

export default Header;