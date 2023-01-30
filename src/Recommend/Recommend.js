import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../common/init.css";
import "../common/sizes.css";
import "../App.css";
import "./Recommend.css";

function Recommend() {
  return (
    <div className="container">
      <Header></Header>
      <div className="wholeWrapRecommend">
        <h2 className="titleFontRecommend">지역별 추천 여행지</h2>
        <div className="wrapBoxRecommend">
          <div className="flexBoxRecommend">
            <div className="mediumImgBoxRecommend"></div>
            <div className="mediumImgBoxRecommend"></div>
          </div>
          <div className="flexBoxRecommend">
            <div className="smallImgBoxRecommend"></div>
            <div className="smallImgBoxRecommend"></div>
            <div className="smallImgBoxRecommend"></div>
          </div>
          <div className="flexBoxRecommend">
            <div className="smallImgBoxRecommend"></div>
            <div className="smallImgBoxRecommend"></div>
            <div className="smallImgBoxRecommend"></div>
          </div>
        </div>
        <div className="underBarRecommend">
          <span className="infoTitleRecommend">지역명</span>
        </div>
        <div className="infoBoxRecommend">
          <div className="infoImgRecommend"></div>
          <div className="infoTextRecommend">
            <h2 className="infoH2Recommend">축제이름</h2>
            <p className="infoPRecommend">축제기간 : 2023.01~2023.02</p>
            <p className="infoPRecommend">축제설명 : 개쩌는 축제</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Recommend;
