import React, { Component } from "react";
import Sectitle from "./sectitle";

export default class Details extends Component {
  checkValid() {
    return (
      !/\d/.test(document.querySelector("#name").value) &&
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(
        document.querySelector("#phone").value
      )
    );
  }
  nameChanged() {
    if (/\d/.test(document.querySelector("#name").value)) {
      this.changeInput("#name", true);
    } else {
      this.changeInput("#name", false);
    }
  }

  phoneChanged() {
    if (!document.querySelector("#phone").value) {
      this.changeInput("#phone", false);
    } else {
      if (
        !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(
          document.querySelector("#phone").value
        )
      ) {
        this.changeInput("#phone", true);
      } else {
        this.changeInput("#phone", false);
      }
    }
  }

  changeInput(str, yn) {
    if (yn) {
      document.querySelector(str).style.borderColor = "red";
      document.querySelector(str).style.color = "red";
    } else {
      document.querySelector(str).style.borderColor = "";
      document.querySelector(str).style.color = "";
    }
  }
  render() {
    const Button = () => (
      <button
        type="button"
        onClick={() => {
          if (this.checkValid()) this.props.onSubmit();
        }}
        id="btn"
        className="details-input"
      >
        <i class="fas fa-paper-plane" />
        שליחה
      </button>
    );

    return (
      <React.Fragment>
        <Sectitle title="תשאירו פרטים ונחזור אליכם בהקדם" />
        <p>
          תנו לי להראות לכם שזה אפשרי, צרו איתי קשר עוד היום ונצא ביחד לדרך
          חדשה!
        </p>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 box">
              <input
                type="text"
                name="name"
                className="details-input"
                id="name"
                placeholder="שם מלא"
                onChange={() => {
                  this.nameChanged();
                }}
              />
            </div>
            <div className="col-12 col-md-3 box">
              <input
                type="text"
                name="phone"
                className="details-input"
                id="phone"
                placeholder="טלפון"
                onChange={() => {
                  this.phoneChanged();
                }}
              />
            </div>
            <div className="col-12 col-md-3 box">
              <input
                type="text"
                name="email"
                className="details-input"
                id="email"
                placeholder="דוא''ל (לא חובה)"
                onChange={() => {}}
              />
            </div>
            <div className="col-12 col-md-3 box">
              <Button />
            </div>
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
