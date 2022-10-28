import React, { Component } from "react";
import "./Banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="Banner bg-light p-5 mb-4">
        <h1>A Warm Welcome</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nobis
          ipsam aliquid voluptates possimus eligendi, libero unde at sint ex
          sapiente ducimus, adipisci corrupti atque ullam rem porro aut dolores!
        </p>
        <a className="btn btn-primary btn-lg">Call to Action</a>
      </div>
    );
  }
}
