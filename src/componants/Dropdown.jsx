import React, { useState } from "react";
import  serviceDropdown  from "./Servicedd";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);


  return (
    <React.Fragment>
      <div
        className={dropdown ? "services-submenu-false" : "services-submenu"}
      
      >
        {serviceDropdown.map((item) => {
          return (
            <div className="Dropdown" key={item.id}>
              <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Dropdown;