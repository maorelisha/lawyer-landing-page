import React, { Component } from "react";
import logo from "../images/logo.png";
import "../css/header.css";
import * as Scroll from "react-scroll";

export default class Header extends Component {
  scrollToLeaveDetails() {
    Scroll.scroller.scrollTo("leaveDetails", {
      smooth: true
    });
  }

  render() {
    return (
      <div className="main-header">
        <div className="container header-container">
          <div className="row">
            <div className="logo">
              <img src={logo} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="col-xs-8 col-md-12">
              <h1>
                כאשר כל הדלתות נסגרות לכם בפנים,
                <br /> אחת אחרי השנייה, אתם צריכים מישהו שיודע לשבור קירות.
              </h1>
              <p>
                משרד עו”ד אסף שמעוני מתמחה בתחום חדלות הפירעון, ההוצאה לפועל
                ופשיטות הרגל. המשרד מעניק ליווי צמוד ללקוחותיו מרגע הגשת הבקשה,
                מתן צו הכינוס, עיכוב הליכים מהיר ועד להפטר חובות ומחיקת חובות
                בהליך החדש. בנוסף ליכולותיו המקצועיות וניסיונו הרב בתחום מציע
                עו”ד שמעוני ללקוחותיו דבר נוסף ולא פחות חשוב. תקווה. תקווה לחזור
                ולחייך שוב, לפרנס שוב את המשפחה בכבוד ולפתוח דף כלכלי חדש ונקי
                מחובות.
              </p>
              <button
                onClick={() => this.scrollToLeaveDetails()}
                id="headerBtn"
              >
                השאירו פרטים
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
