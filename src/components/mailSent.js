import React, { Component } from "react";
import Sectitle from "./sectitle";
import "../css/mailSent.css";

export default class mailSent extends Component {
  render() {
    return (
      <React.Fragment>
        <i class="fas fa-check-circle fa-5x" />
        <Sectitle title="תודה!" />
        <p>קיבלנו את הפרטים. ניצור עמכם קשר בהקדם.</p>
      </React.Fragment>
    );
  }
}
