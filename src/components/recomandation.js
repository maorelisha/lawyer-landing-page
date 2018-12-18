import React, { Component } from "react";
import "../css/recomandation.css";

export default class Recomandation extends Component {
  render() {
    const { name, status, comment, img } = this.props;
    return (
      <div className="main-recom" dir="rtl">
        <div className="reco-img">
          <img src={img} className="img-fluid" alt="Responsive image" />
        </div>
        <div className="reco-comment">{comment}</div>
        <div className="reco-name">{name}</div>
        <div className="reco-status">{status}</div>
      </div>
    );
  }
}
