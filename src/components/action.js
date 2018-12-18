import React, { Component } from "react";
import Actionitem from "./actionitem";
import court from "../images/court.png";
import lawyer from "../images/lawyer.png";
import group from "../images/group.png";

export default class Action extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Actionitem
            path={court}
            title="חדלות פירעון ופשיטת רגל"
            text="משרדנו יפעל בנחישות ומקצועיות עד להשגת צו ההפטר המיוחל שמשמעו הסרת כלל העיקולים וההגבלות שהוטלו על החייב ואפשרות לתחילתה של דרך כלכלית חדשה ובריאה יותר."
            color="#F5F5F5"
          />
          <Actionitem
            path={lawyer}
            title="ייצוג חייבים מול
        הוצאה לפועל"
            text="אנו משקיעים את כל הידע המשפטי והניסיון שצברנו לביטול המגבלות והעיקולים השונים שמוטלים על חייבים על ידי הוצאה לפועל ונותנים ללקוחותינו אוויר לנשימה."
            color="white"
          />
          <Actionitem
            path={group}
            title="הסדרי חובות
        מול נושים"
            text="לזכות לקוחותינו עומדים הניסיון והידע הרבים שצברנו לאחר טיפול במאות תיקים. הטיפול שאנו מעניקים הוא ייחודי ומותאם אישית, ומטרתו היא לאפשר ללקוחותינו לפתוח דף כלכלי חדש. "
            color="#F5F5F5"
          />
        </div>
      </div>
    );
  }
}
