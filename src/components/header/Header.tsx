import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/brand.svg";

import './Header.css'
const Header: React.FC = () => {
  return (
    <div className="brand">
      <Link to='/'>
      <img src={logo} alt="brand" />
      </Link>
      
    </div>
  );
};
export default Header;
