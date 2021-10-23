import React from "react";
import "./AboutUs.css";
import hand from "./rona.png";

const AboutUs = () => {
  return (
    <>
      <div id="About--id" className="Why-Us-Container">
        <div className="Services-Title">
          <h1>لماذا نحن ؟ </h1>
        </div>
        <div className="Why-Paragraphe">
          <div className="About-us">
            <div className="About-us-P">
              <p>
                تبان يوز موقع تسويقي مختص في تقديم خدمات تسويقية إنشاء مواقع
                إنترنت وعروض ترويجية ، نفخر بتضخيم الطلب على العلامات التجارية
                الجديدة 
              </p>
              <p>
                بفضل الجهود التي نقوم بها وبناء على الخبرة المكتسبة بعد التعامل
                مع العديد من الزبائن يمكننا بناء الجمهور المناسب لتجاوز أهدافك
                التسويقية و إنشاء علامة تجارية رائدة في السوق 
              </p>
            </div>
          </div>
          <div className="cool-image">
            <img src={hand} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
