import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../common/init.css";
import "../common/sizes.css";
import "../App.css";
import "./MyPage.css";

function MyPage() {
  return (
    <div className="container">
      <Header></Header>
      <div className="wholeWrapMyPage">
        <div className="mainMyPage">
          <h2 className="titleFontMyPage">My Page</h2>
          <div className="imageCircle"></div>
          <div className="infoTitleMyPage">홍길동</div>
        </div>
        <div className="wrapBoxMyPage">
          <div className=""></div>
        </div>
      </div>
      <Footer></Footer>;
    </div>
  );
}

export default MyPage;
