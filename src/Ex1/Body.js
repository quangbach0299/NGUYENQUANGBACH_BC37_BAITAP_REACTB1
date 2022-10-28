import React, { Component } from "react";
import "./Body.css";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div className="Body py-4">
        <div className="container">
          <Banner></Banner>
          <Item></Item>
        </div>
      </div>
    );
  }
}
