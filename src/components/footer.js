import React, { Component } from "react";
import facebook from "../images/facebook.png";
import "../css/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container footer-container">
          <div className="row">
            <div className="col-md-4 order-md-last  footer-item">
              <div>
                <a href="http://www.facebook.com">
                  <img
                    src={facebook}
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </a>
              </div>
              <div>כל הזכויות שמורות 2018 ©</div>
            </div>
            <div // Details
              className="col-md-4 footer-item "
            >
              <div>
                <strong>משרד עו”ד אסף שמעוני</strong>
              </div>
              <div>
                האבות 72 (עיר עתיקה), באר שבע <br />
                טלפון: 073-2417719 <br />
                דוא”ל : office@shimoni-law.co.il
              </div>
            </div>
            <div //hours
              className="d-none d-md-block col-md-4 footer-item"
            >
              <div>
                <strong>שעות פעילות:</strong>
              </div>
              <div className="row">
                <div className="col">
                  ראשון - חמישי <br />
                  שישי <br />
                  שבת
                </div>
                <div className="col">
                  09:00 - 18:00 <br />
                  09:00 - 12:00 <br />
                  סגור
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
