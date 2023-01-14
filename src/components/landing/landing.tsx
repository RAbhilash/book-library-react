import "./landing.scss";
import Overview from "../landing/overview/overview";
import Allbooks from "../pages/allbooks/allbooks";
import Settings from "../pages/settings/settings";
import About from "../pages/about/about";
import Header from "../header/header";
import Sidenav from "../sidenav/sidenav";
import { Routes,Route } from "react-router-dom";
function landing({showSS}:{showSS:React.MutableRefObject<boolean>}) {
  if (showSS)
    return (
      <div id="intro-wrap">
        <h1 className="intro one">GREETINGS READER</h1>
        <h1 className="intro two">TEXT 2</h1>
        <h1 className="intro three">TEXT 3</h1>
      </div>
    );
  else return(<>
  <Header/>
  <div id="horizontal-wrapper">
    <Sidenav/>
    <Routes>
      <Route path="/" element={<Overview/>}/>
      <Route path="/allbooks" element={<Allbooks/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </div>
  </>)
}

export default landing;
