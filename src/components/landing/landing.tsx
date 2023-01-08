import "./landing.scss";
import Overview from "../landing/overview/overview";
import Allbooks from "../sidenav/allbooks/allbooks";
import Settings from "../sidenav/settings/settings";
import About from "../sidenav/about/about";
import { Routes,Route } from "react-router-dom";
function landing({showSS}:{showSS:boolean}) {
  if (showSS)
    return (
      <div id="intro-wrap">
        <h1 className="intro one">GREETINGS READER</h1>
        <h1 className="intro two">TEXT 2</h1>
        <h1 className="intro three">TEXT 3</h1>
      </div>
    );
  else return <Routes>
    <Route path="/" element={<Overview/>}/>
    <Route path="/allbooks" element={<Allbooks/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>;
}

export default landing;
