import React, { Component } from "react";
import "../css/actionitem.css";

export default class Actionitem extends Component {
  render() {
    const { path, text, title, color } = this.props;
    return (
      <div
        className="col-md-4 main-action-item"
        style={{ backgroundColor: color }}
      >
        <div>
          <img src={path} className="img-fluid" alt="Responsive image" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }
}
