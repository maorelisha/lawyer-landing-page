import React, { Component } from "react";
import line from "../images/Line.png";
import "../css/sectitle.css";

export default class sectitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="sectitle-main">
        <h1>{title}</h1>
        <img src={line} className="img-fluid" alt="Responsive image" />
      </div>
    );
  }
}
