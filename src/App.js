import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Recommend from "./Recommend/Recommend";
import MyPage from "./MyPage/MyPage";
import "./common/init.css";

//React Main 함수
function App() {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header></Header>
              <Section></Section>
              <Footer></Footer>
            </div>
          }
        />
        <Route
          path="/Recommend"
          element={
            <div>
              <Recommend></Recommend>
            </div>
          }
        />
        <Route
          path="/MyPage"
          element={
            <div>
              <MyPage></MyPage>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
