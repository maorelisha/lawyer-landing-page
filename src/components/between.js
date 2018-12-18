import React, { Component } from "react";
import Betweenitem from "./betweenitem";
import money from "../images/money.png";
import paper from "../images/paper.png";
import medal from "../images/medal.png";
import "../css/between.css";

export default class Between extends Component {
  render() {
    return (
      <div className="main-between">
        <div className="container between-container">
          <div className="row between-row">
            <Betweenitem
              title="20,000,000+"
              text="ש”ח חובות שנמחקו"
              path={money}
            />
            <Betweenitem title="800+" text="חייבים שפתחו דף חדש" path={paper} />
            <Betweenitem title="100%" text="זמינות ללקוחותינו" path={medal} />
          </div>
        </div>
      </div>
    );
  }
}
