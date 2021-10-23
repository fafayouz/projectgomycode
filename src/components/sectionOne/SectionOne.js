import React from "react";
import "./SectionOne.css";
import التسويق from "./التسويق الإلكتروني.png";
import TextTransition, { presets } from "react-text-transition";

const SectionOne = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const TEXTS = [
    "تصميم و إنشاء موقع إلكتروني إحترافي",
    "ضع عملك في أعلى محركات البحث جوجل",
    "زيادة حركة المرور على الويب الخاص بك",
    "التسويق عبر مواقع التواصل الإجتماعي"

  ];
  return (
    <>
      <div className="Container">
        <div className="Rounded-box">
          <img src={التسويق} alt="التسويق الإلكتروني" />
        </div>
        <div className="title-box">
          <div className="Title">
            <h1>مع تبان يوز</h1>
          </div>
          <div className="Sub-Title">
            <span>
              <TextTransition
                className="text-loop"
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
