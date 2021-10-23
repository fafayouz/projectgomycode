import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import NavbarMobile from "../components/navbar/Navbar.Mobile";
import SectionOne from "../components/sectionOne/SectionOne";
import Services from "../components/services/Services";
import AboutUs from "../components/aboutus/AboutUs";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
const Home = () => {
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
      <Desktop>
        <Navbar />
      </Desktop>
      <Mobile>
          <NavbarMobile/>
      </Mobile>
      <SectionOne/>
      <Services/>
      <AboutUs/>
      <Contact/>
      <Footer/>

    </>
  );
};

export default Home;

