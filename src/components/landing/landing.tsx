import "./landing.scss";
import Overview from "../landing/overview/overview";
import { useContext } from "react";
import { VisitedContext } from "../../App";
function landing() {
  const showSS=useContext(VisitedContext)
  if (showSS)
    return (
      <div id="intro-wrap">
        <h1 className="intro one">GREETINGS READER</h1>
        <h1 className="intro two">TEXT 2</h1>
        <h1 className="intro three">TEXT 3</h1>
      </div>
    );
  else return <Overview/>;
}

export default landing;
