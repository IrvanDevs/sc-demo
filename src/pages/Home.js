import React, { useRef } from "react";
import "./Home.css";
import Intro from '../mainPage-element/Intro';
import Brands from '../mainPage-element/Brands';
import Cate from '../mainPage-element/Cate';
import StudyCase from '../mainPage-element/StudyCase';
import Achievement from '../mainPage-element/Achievement';
import Insight from '../mainPage-element/Insight';
import LiveStreaming from "../mainPage-element/LiveStreaming";
import ShortVideo from "../mainPage-element/ShortVideo";
import Ads from "../mainPage-element/Ads";
import Shopsmart from "../mainPage-element/Shopsmart";
import Igservice from "../mainPage-element/Igservice";
import Mcn from "../mainPage-element/Mcn";
import Contact from "../contact/ContactUs";
import Header from "../header/Header";
import ScrollTopBtn from "../element/ScrollTopBtn";

function Home() {
  const contactRef = useRef(null);

  return (
    <div className="Home-container">
      <Header contactRef={contactRef} /> 
      <Intro />
      <Brands />
      <Cate />
      <StudyCase />
      <Achievement />
      <div className="Services-container">
        <Insight />
        <div className="Service-1">
          <LiveStreaming />
          <ShortVideo />
        </div>
        <Mcn />
        <Ads />
        <Shopsmart />
        <Igservice />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <ScrollTopBtn />
    </div>
  );
}

export default Home;