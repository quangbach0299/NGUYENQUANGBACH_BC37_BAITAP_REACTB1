import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      //return giao diện của header
      <div className="header">
        <p className="logo">Logo</p>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </nav>
      </div>
    );
  }
}

export default Header;
