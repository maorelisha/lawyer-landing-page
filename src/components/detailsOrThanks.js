import React, { Component } from "react";
import Details from "./details";
import MailSent from "./mailSent";
import "../css/details.css";

export default class detailsOrThanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailsSubmited: false
    };
  }
  showThanks() {
    this.setState({
      isDetailsSubmited: true
    });
  }
  render() {
    return (
      <div className="details">
        {!this.state.isDetailsSubmited ? (
          <Details onSubmit={() => this.showThanks()} />
        ) : (
          <MailSent />
        )}
      </div>
    );
  }
}
