import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Blog.css";
import { useMediaQuery } from "react-responsive";
import Background from "./background.png";
import JSicon from "./iconjs.png";
import FCicon from "./iconfcbk.png";
import cameraicon from "./camera.png";
import profil from "./pro.png";
import Telegram from "./telegram.png";
import Footer from '../../components/footer/Footer'
import NavbarMobile from "../../components/navbar/Navbar.Mobile";



const Blog = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <>
      <Mobile>
          <NavbarMobile/>
          <div className="Blog-title">
        <div className="Box-image-1">
          <img src={JSicon} alt="برمجة مواقع" />
        </div>
        <div className="Box-image-2">
          <img src={FCicon} alt="ترويج الصفحات" />
        </div>
        <div className="Box-image-3">
          <img src={cameraicon} alt="صناعة محتوى" />
        </div>
        <div className="Box-image-4">
          <img src={profil} alt="صناعة محتوى" />
        </div>
        <div className="Box-image-5">
          <img src={Telegram} alt="صناعة محتوى" />
        </div>
        <img src={Background} alt="digital marketing" />
      </div>
      <div className="Blog-Content">
        <h1>لا يوجد تدوينات جديدة</h1>
      </div>
      <Footer/>
      </Mobile>
      <Desktop>
        <Navbar />
        <div className="Blog-title">
        <div className="Box-image-1">
          <img src={JSicon} alt="برمجة مواقع" />
        </div>
        <div className="Box-image-2">
          <img src={FCicon} alt="ترويج الصفحات" />
        </div>
        <div className="Box-image-3">
          <img src={cameraicon} alt="صناعة محتوى" />
        </div>
        <div className="Box-image-4">
          <img src={profil} alt="صناعة محتوى" />
        </div>
        <div className="Box-image-5">
          <img src={Telegram} alt="صناعة محتوى" />
        </div>
        <img src={Background} alt="digital marketing" />
      </div>
      <div className="Blog-Content">
        <h1>لا يوجد تدوينات جديدة</h1>
      </div>
      <Footer/>
      </Desktop>
      
    </>
  );
};

export default Blog;
