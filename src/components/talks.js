import React, { Component } from "react";
import Sectitle from "./sectitle";
import Recomandation from "./recomandation";
import arrowR from "../images/arrowR.png";
import arrowL from "../images/arrowL.png";
import customer1 from "../images/customer.png";
import "../css/talks.css";
import Slider from "react-slick-rtl";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <img src={arrowR} className={"arrowBtnR " + className} onClick={onClick} />
  );
}

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <img src={arrowL} className={"arrowBtnL " + className} onClick={onClick} />
  );
}

export default class Talks extends Component {
  render() {
    var sliderSttings = {
      dots: true,
      infinite: true,
      speed: 500,
      // fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // rtl: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    return (
      <div className="container main-talks">
        <Sectitle title="לקוחות מספרים" />
        <div>
          <Slider {...sliderSttings}>
            <Recomandation
              img={customer1}
              status="נשואה + 2 מנתיבות"
              name="ש’ כהן"
              comment=' עו"ד מס 1 .. עובדת ביעילות חריצות והכי חשוב נאמנות !!
              היא נותנת שרות ברמה גבוהה , מסורה מקצועית סבלנית , אפשרת לכתוב פה עוד מיליון דברים .. אבל עד שלא מנסים .. לא באמת יודעים .. אז חתימה טובה לכולם !'
            />
            <Recomandation
              img={customer1}
              status="רווק מחולון"
              name="מאור אלישע"
              comment="מספר 1 בתחומו. תודה על דרך ארוכה בה ליווית אותי."
            />
            <Recomandation
              img={customer1}
              status="רווקה מראשון לציון"
              name="קטרין איבזוב"
              comment="עורך הדין הטוב במדינה! תודה רבה"
            />
          </Slider>
        </div>
      </div>
    );
  }
}

// <button type="button" data-role="none" class="slick-arrow slick-prev" style="display: block;"> Previous</button>
