import React, { Component } from "react";
import asafImg from "../images/asaf.png";
import "../css/about.css";
import * as Scroll from "react-scroll";

export default class About extends Component {
  scrollToLeaveDetails() {
    Scroll.scroller.scrollTo("leaveDetails", {
      smooth: true
    });
  }
  render() {
    return (
      <div className="container about-container">
        <div className="row">
          <div className="img col-md-4 order-md-last co l-12">
            <img src={asafImg} className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-md-8 col-12">
            <div className="text">
              <strong>
                משרד עו”ד אסף שמעוני הוא המשרד המוביל בב”ש ואזור הדרום בתחום
                פשיטות הרגל והוצאה לפועל.{" "}
              </strong>
              <br />
              לעו”ד שמעוני ניסיון משפטי וכלכלי עשיר והתמחות מיוחדת בתיקים הקשים
              והנואשים ביותר. תחום עיסוקו של עו”ד שמעוני הוא תחום מאתגר במיוחד
              שמצריך עו”ד שלא מפחד ללכלך את הידיים ולצאת עם הלקוחות שלו לקרב. זה
              בדיוק מה שמציע עו”ד אסף שמעוני. את העקרונות שספג בשירותו הצבאי
              בסיירת גבעתי ולאחר מכן כמדריך בני נוער לפני גיוס בתנועת “אחרי”,
              הוא מביא עמו גם אל בין כתלי בית המשפט. על עקרונות אלה הוא מבסס את
              הקווים המנחים אותו בעבודתו כעורך דין מומחה לפשיטות רגל ומחיקת
              חובות.
              <div />
            </div>
            <button onClick={() => this.scrollToLeaveDetails()} id="btn">
              השאירו פרטים
            </button>
          </div>
        </div>
      </div>
    );
  }
}
