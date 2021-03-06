import React, { Component } from "react";
import Sectitle from "./sectitle";
import Qaitem from "./qaitem";
import "../css/qa.css";

export default class Qa extends Component {
  state = { showMoreQa: true, lastwidth: 0 };

  clickHandler = () => {
    this.setState({ showMoreQa: !this.state.showMoreQa });
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ showMoreQa: !(window.innerWidth < 768) });
  }

  render() {
    return (
      <div className="main-qa">
        <div className="container ">
          <Sectitle title="שאלות נפוצות" />
          <div className="row">
            <Qaitem
              num="1"
              q="מהם הקריטריונים לקבלת הפטר בהליך פשיטת רגל?"
              a="בכדי שיהיה זכאי לקבלת הפטר חובות על החייב להוכיח כי צבר את חובותיו בתום לב וללא כוונת זדון. כמו כן עליו להגיש את הדוחות החודשיים למנהל המיוחד בצורה מלאה ורציפה ולעמוד בצו התשלומים שנקבע לו, ללא פיגורים!              "
            />
            <Qaitem
              num="2"
              q="מהי פשיטת רגל בהליך החדש?"
              a="הרפורמה בתחום פשיטת הרגל מפשטת את ההליך, מקצרת אותו והופכת אותו לברור יותר עבור החייב. דרך העבודה החדשה מתעדפת את החייבים ומעודדת אותם לפרוע את חובותיהם. מתכונת העבודה החדשה מאפשרת לחייבים העומדים בקריטריונים לפתוח דף חדש ללא חובות ובתוך פרק זמן סביר ומוגדר בבהירות."
            />
            <Qaitem
              num="3"
              q="מהו עיכוב הליכים בפשיטת רגל?"
              a="עורך יש דיני בין עורך הפלילי בבית מאמץ להקדיש עורמרגע שהוגשה בקשה לפשיטת רגל רשאי בית המשפט לעכב את ההליכים המשפטיים וכן כל הליך אחר המתנהל על פי דין כנגד החייב.לאחר שניתן צו הכינוס, כל הליכי הגביה מעוכבים עד למתן צו הפטר או ביטול ההליך."
            />

            {this.state.showMoreQa ? (
              <React.Fragment>
                <Qaitem
                  num="4"
                  q="האם ניתן לבטל עיכוב יציאה מן הארץ?"
                  a="במקרים מסוימים ייעתר בית המשפט לבקשת חייב לביטול זמני של צו עיכוב יציאה מן הארץ. במידה והחייב יצליח להעמיד ערובות מתאימות לכך שיחזור ארצה לאחר הביקור בחו”ל, ולשם כך יצטרך להמציא ערבים ראויים שיסכימו לעיכוב יציאתם שלהם מן הארץ עד לחזרתו של החייב."
                />
                <Qaitem
                  num="5"
                  q="האם ניתן לקבל הפטר בהוצאה לפועל?"
                  a="בהחלט. תיקון שנכנס לתוקפו לאחרונה בחוק ההוצאה לפועל, מסמיך רשמים בהוראת שעה לתת הפטר לחייבים בהוצאה לפועל. על החייבים שמבקשים את ההפטר לעמוד בתנאים מסוימים אשר דומים לקריטריונים הדרושים לקבלת צו הפטר במסגרת הליכי פשיטת רגל. לא כל חייב מתאים להליך של הפטר בהוצאה לפועל. צרו קשר עם עו”ד אסף שמעוני לקבלת מידע נוסף בנושא הפטר לחייבים בהוצאה לפועל."
                />
                <Qaitem
                  num="6"
                  q="מהו איחוד תיקים והאם כדאי לבצע?"
                  a="איחוד תיקים כשמו כן הוא. כל התיקים שמנוהלים כנגד החייב מאוחדים לכדי תיק אחד. בהתאם, ייקבע פסק דין אחד לתיק המאוחד, במקום פסקי דין כמספר התיקים. פתרון זה מומלץ רק במקרים מסוימים וכדאי להתייעץ עם עורך דין מומחה שיודע להעריך את מידת הכדאיות של כל חייב לפנות להליך זה."
                />

                <div className="col-12 d-block d-md-none btn">
                  <button className="more-qa" onClick={this.clickHandler}>
                    <i class="far fa-minus-square" /> צמצם שאלות
                  </button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="col-12 d-block d-md-none btn">
                  <button className="more-qa" onClick={this.clickHandler}>
                    <i class="far fa-plus-square" /> שאלות נוספות
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
