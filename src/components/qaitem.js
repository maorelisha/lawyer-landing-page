import React, { Component } from "react";
import "../css/qaitem.css";

export default class qaitem extends Component {
  render() {
    const { q, a, num } = this.props;
    return (
      <div className="main-qa-item col-12 col-md-6">
        <span className="num">{num}.</span>
        <span className="question">{q}</span>
        <div className="answer">{a}</div>
      </div>
    );
  }
}
