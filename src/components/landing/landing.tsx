import { useState, useEffect, useMemo } from "react";
import Slidein from "./currentlyReading/currentlyReading";
import "./landing.scss";
function landing({ showSS }: { showSS: boolean }) {
  if (showSS)
    return (
      <div id="intro-wrap">
        <h1 className="intro one">GREETINGS READER</h1>
        <h1 className="intro two">TEXT 2</h1>
        <h1 className="intro three">TEXT 3</h1>
      </div>
    );
  else return <h1>txt</h1>;
}

export default landing;
