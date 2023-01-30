import React from "react";
import "./Section.css";
import { Link, Route, Routes } from "react-router-dom";
import SimpleSlide from "../SimpleSlide/SimpleSlide";
const Section = () => {
  return (
    <div className="flexMap">
      <div className="mainMap"></div>
      <div className="section ">
        <div className="mainSlide">
          <SimpleSlide></SimpleSlide>
        </div>

        <div className="arrayMenu mainMenu">
          <div className="openCamping">캠핑</div>
          <div className="openCaravan">카라반</div>
          <div className="openGlamping">글램핑</div>
          <div className="openCarping">차박</div>
        </div>
        <div className="researchBox">
          <h2>캠핑장 일정 조회</h2>
          <div className="dateWrap">
            <label className="researchShortName">출발</label>
            <input className="startDate date" type="date"></input>
            <label className="researchShortName">도착</label>
            <input className="endDate date" type="date"></input>
          </div>
          <div>
            <label className="researchName">캠핑장명 검색</label>
            <input className="researchInput" type="text"></input>
          </div>
          <div>
            <label className="researchName">지역 검색</label>
            <select className="researchInput" id="selectCountry">
              <option>ss</option>
            </select>
          </div>

          <button className="researchButton">검색</button>
        </div>
        <div className="recomandTrip">
          <div className="mainTitle">
            <Link to="/recommend">추천여행</Link>
          </div>

          <div className="tripMenu arrayMenu">
            <div className="openTrip"></div>
            <div className="openTrip"></div>
            <div className="openTrip"></div>
          </div>
        </div>
        <div className="appInform"> 이용안내 </div>
      </div>
    </div>
  );
};

export default Section;
