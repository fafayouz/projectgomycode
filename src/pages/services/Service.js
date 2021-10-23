import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Service.css";
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import Data from "../../components/services/Data";
import { useMediaQuery } from "react-responsive";
import NavbarMobile from "../../components/navbar/Navbar.Mobile";

const Service = (props) => {
  const [SinglePageData , setSinglePageData] = useState({});

        useEffect(() => {
            let path = props.match.params.slug
            const card = Data.find(x => x.slug === path)
            setSinglePageData(card)
        }, [])

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
      <div className="Service-Title">
        <img src={SinglePageData.imagedetails} alt={SinglePageData.alt} />
        <h1>{SinglePageData.title}</h1>
      </div>
      <div className="Service-Content">
        <h1>{SinglePageData.singletitle1}</h1>
        <p>
          {SinglePageData.description}
        </p>
        <h1>{SinglePageData.singletitle2}</h1>
        <p>
         {SinglePageData.bio}
         <br/>
         {SinglePageData.bio2}
        </p>
      </div>
      <Contact/>
      <Footer/>
    </Mobile>
    <Desktop>

      <Navbar />
      <div className="Service-Title">
        <img src={SinglePageData.imagedetails} alt={SinglePageData.alt} />
        <h1>{SinglePageData.title}</h1>
      </div>
      <div className="Service-Content">
        <h1>{SinglePageData.singletitle1}</h1>
        <p>
          {SinglePageData.description}
        </p>
        <h1>{SinglePageData.singletitle2}</h1>
        <p>
         {SinglePageData.bio}
         <br/>
         {SinglePageData.bio2}
        </p>
      </div>
      <Contact/>
      <Footer/>
    </Desktop>
    </>
  );
};

export default Service;
