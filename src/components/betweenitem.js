import React, { Component } from "react";
import "../css/betweenitem.css";

export default class Betweenitem extends Component {
  render() {
    const { path, title, text } = this.props;
    return (
      <div className="main-between-item col-12 col-md-4 ">
        <div className="row">
          <div className="img col-5 ">
            <img src={path} className="img-fluid" alt="Responsive image" />
          </div>
          <div className="text col-6 offset-1">
            <h2>{title}</h2>
            <h4>{text}</h4>
          </div>
        </div>
      </div>
    );
  }
}
